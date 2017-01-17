<template>
  <ol>
    <li v-for="news of list">
      <p class="title">{{ news.title }}</p>
      <p class="date">{{ news.create_at }}</p>
      <p class="author">By: {{ news.author.loginname }}</p>
    </li>
  </ol>
</template>

<style scoped>
    ol {
        margin-left: .2rem;
        list-style: outside decimal;
    }
    
    li {
        line-height: 1.5;
        padding: 1rem;
        border-bottom: 1px solid #b6b6b6;
    }
    
    .title {
        font-weight: bold;
        font-size: .36rem;
    }
    
    .date {
        font-size: .24rem;
        color: #d6d6d6;
    }

</style>
<script>
    import news from '../../js/api/hotel'

    export default {
        data() {
            return {
                list: [],
                limit: 10
            }
        },
        props: {
            page: {
                type: Number,
                default: 1
            }
        },
        created() {
            this.get()
        },
        watch: {
            page(val) {
                this.get()
            }
        },
        methods: {
            get() {
                var that = this;
                news.getList({
                    page: that.page,
                    limit: that.limit
                }, function(list) {
                    console.info(list);
                    console.info(that);
                    list.body.data.forEach((data) => {
                            const d = new Date(data.create_at)
                            data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
                        })
                        //that.list = that.list.concat(list.body.data); //无限加载
                    that.list = list.body.data; //分页
                })
            }
        }
    }

</script>
