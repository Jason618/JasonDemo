(function (w) {
    function bindEvent(node, type, callback, bubble) {
        //callback check
        if (typeof callback != 'function') {
            alert('please pass a callback function!');

        }
        bubble = bubble || false;

        if (document.addEventListener) {
            node.addEventListener(type, callback, bubble);
        } else {
            node.attachEvent('on' + type, callback);
        }
    }

    function unbindEvent(node, type, callback) {
        if (!node) {
            return;
        }
        if (document.removeEventListener) {
            node.removeEventListener(type, callback);
        } else {
            node.detachEvent('on' + type, callback);
        }
    }

    //在不同的devicePixelRatio下获得相同的1px的css宽度
    var resetFontSizeWithDevicePixelRatio = function (event) {
        var UA = window.navigator.userAgent,
            IsAndroid = /Android|HTC/i.test(UA),
            IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),

            //设备devicePixelRatio  android低版本获取不到
            devicePixelRatio = window.devicePixelRatio || 1,
            clientWidth = 0,
            viewport = document.getElementsByName('viewport')[0],
            html = document.getElementsByTagName("html")[0],

            baseWidth = 320, //640px base width;
            baseDevicePixelRatio = 2;
        //devicePixelRatio = IsIPhone ? devicePixelRatio : 1; //默认只处理iPhone手机的缩放

        /*
         *@desc reset font size for document root element
         * max-width:640px  1rem = 100px  fontsize: 100px
         * iPhone手机会根据devicePixelRatio 设置viewport和font-size
         * android 手机initial-scale maximum-scale minimum-scale 默认全为1
         */

        if (IsAndroid || IsIPhone) {
            //可视区域宽度
            clientWidth = window.innerWidth == window.screen.availWidth ? window.screen.availWidth : window.innerWidth / devicePixelRatio;
            pixelRatioPercent = (devicePixelRatio * clientWidth) / baseWidth / baseDevicePixelRatio;
            //重置font - size
            html.style.fontSize = 100 * pixelRatioPercent + 'px';
            //重置viewport
            viewport.setAttribute('content', 'initial-scale=' + 1 / devicePixelRatio + ', maximum-scale=' + 1 / devicePixelRatio + ', minimum-scale=' + 1 / devicePixelRatio + ', user-scalable=no');
        } else {
            //重置font - size
            document.querySelector(".wrap").style.maxWidth = baseWidth * baseDevicePixelRatio + 'px';
            var width = document.querySelector(".wrap").clientWidth;
            html.style.fontSize = 100 * (width / (baseWidth * baseDevicePixelRatio)) + 'px';
        }
    }

    //只根据容器宽度比例设置fontSize
    var resetFontSize = function (event) {
        var UA = window.navigator.userAgent,
            IsAndroid = /Android|HTC/i.test(UA),
            IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),

            //设备devicePixelRatio  android低版本获取不到
            devicePixelRatio = window.devicePixelRatio || 1,
            clientWidth = 0,
            viewport = document.getElementsByName('viewport')[0],
            html = document.getElementsByTagName("html")[0],

            baseWidth = 320, //640px base width;
            baseDevicePixelRatio = 2;
        //devicePixelRatio = IsIPhone ? devicePixelRatio : 1; //默认只处理iPhone手机的缩放

        /*
         *@desc reset font size for document root element
         * max-width:640px  1rem = 100px  fontsize: 100px
         */

        document.querySelector(".wrap").style.maxWidth = baseWidth * baseDevicePixelRatio + 'px';
        var width = document.querySelector(".wrap").clientWidth;
        html.style.fontSize = 100 * (width / (baseWidth * baseDevicePixelRatio)) + 'px';
    }

    bindEvent(document, 'DOMContentLoaded', resetFontSizeWithDevicePixelRatio);
    bindEvent(window, 'resize', resetFontSizeWithDevicePixelRatio);

})(window);