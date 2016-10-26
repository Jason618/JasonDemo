/**
 * Created by lichengjun on 16/10/26.
 */

/*
 * @desc display the flash cast
 *       depend on jquery and underscore library
 * @time 2016-10-26
 * @author Jason
 * */
(function () {
    "use strict";
    var displayCast = {
        castList: null,
        apiUrl: 'theFlash.json',
        init: function () {
            //load data
            this.loadData();
            //bind event
            this.bindEvent();
        },
        loadData: function () {
            var that = this;
            $.get(this.apiUrl, function (result) {
                console.info(result);
                that.castList = result;
            }).done(function () {
                console.info('todo other things');
                //render data
                console.info('render data');
                that.renderData();
            }).fail(function (xhr, error) {
                console.info(error);
            });
        },
        renderData: function () {
            var items = this.castList ? this.castList.casts : this.castList;
            if (items) {
                var itemsTemplate = _.template($('#castItemTpl').html());
                var html = itemsTemplate({data:items});
                $('#castList').html(html);
            }
        },
        bindEvent: function () {
            $("#castList").on("mouseover",'a',function(event){
                var target = $(event.currentTarget);
                target.toggleClass("show-desc");
            });
            $("#castList").on("mouseout",'a',function(event){
                var target = $(event.currentTarget);
                target.toggleClass("show-desc");
            });
        }
    }
    displayCast.init();

    /*
    * @param year string  2016
    * @param month string  1
    * @param day string   9
    * @return int
    * @desc
    * */
    function getDayOfYear(year,month,day){
        var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
        var commonYear = [31,28,31,30,31,30,31,31,30,31,30,31];
        var year = parseInt(year),month = parseInt(month),day = parseInt(day),dayOfYear=0;

        if((year % 4 === 0) && (year % 400 ===0)){
            //闰年
            for(var i=1;i<month;i++){
                dayOfYear += leapYear[i-1];
            }
            return dayOfYear + day;

        }else{
            for(var i=1;i<month;i++){
                dayOfYear += commonYear[i-1];
            }
            return dayOfYear + day;
        }
    }

    $('button').click(function(event){
        var value = $('input').val();
        if(value){
            var year,month,day;
            year = value.split('-')[0];
            month = value.split('-')[1];
            day = value.split('-')[2];

            alert('该天为当年的第'+getDayOfYear(year,month,day) +'天');
        }
    });

})(window, jQuery, _);