<template>
    <a class="button" @click="previous" v-show="showPrivousBtn" :showPrivousBtn="showPrivousBtn">GO PREVIOUS</a>
    <Vlist :page="page"></Vlist>
    <a class="button" @click="next" >GO NEXT</a>
</template>
<style scoped>
    @import "../../css/common/reset.css";
    @import "../../css/common/layout.css";
    @import "../../css/common/rem.css";
    @import "../../css/common/global_1.css";
    .button {
        display: block;
        box-sizing: border-box;
        width: 100%;
        background: #212121;
        color: #fff;
        font-weight: bold;
        text-align: center;
        padding: .3rem;
        cursor: pointer;
        text-decoration: none;
    }
    
    .button span {
        margin-left: .36rem;
        font-size: .5rem;
        color: #d6d6d6;
    }

</style>
<script>
    import Vlist from '../../components/hotel/List'
    export default {
        components: {
            Vlist
        },
        data: function() {
            return {
                page: 1,
                showPrivousBtn: false
            }
        },
        methods: {
            next: function() {
                console.info(this);
                this.page++;
                this.showPrivousBtn = true;
            },
            previous: function() {
                this.page--;
                if (this.page === 1) {
                    this.showPrivousBtn = false;
                }
            }
        }
    }

</script>
