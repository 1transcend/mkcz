<template>
    <div id="app">
        <Header/>

        <div class="content">
            <div class="content-bj">
                <div class="content-img">
                <img :src="istop.imageurl" alt="图片">
                </div>
                <div class="wz">
                    <div class="wz-title">{{istop.title}}</div>
                    <div class="wz-img"></div>
                </div>
            </div>
        </div>

        <div class="content1-bottom">
            <div class="content1" v-for="(v,k) in list" :key="k">
                <router-link :to="{path:'/article-details/',query:{id:v.id}}">
                    <div class="content1-wz">
                        <div class="content1-left">
                            <img class="content1-img" :src="v.imageurl" alt="图片">
                        </div>
                        <div class="content1-right">
                            <div class="content1-title">{{v.title}}</div>
                            <div class="content1-ms">{{v.brief}}</div>
                            <div class="content1-gd">
                                <p>3人开通</p>
                                <a href="">点击查看更多>></a>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- 底部 -->
        <Footer/>
    </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
     components: {
         Footer,
         Header
     },
    data(){
        return{
            istop : [],
            list : [],
        }
    },

    created(){
        this.axios.get('http://39.105.94.90/wxmkczgw/phone.php?app=article&act=articleList&id=14&page=1',{
        })
        .then((res)=>{
            console.log(res['data']['info']['istop']);
            console.log(res['data']['info']['list']);
            // console.log(res['data']['info']['list'][0]['content']);
            this.istop = res['data']['info']['istop'];
            this.list = res['data']['info']['list'];
            // var content = res['data']['info']['list'][0]['content'];
            // console.log(content.innerTEXT);
        })
    }
}
</script>

<style scoped>
    #app{
        position: relative;
        background:rgba(235, 235, 235, 1);
    }

    .content{
        width: 100%;
        height: 23rem;
        background:rgba(235,235,235,1);
        margin-top:5.01rem;
    }
    .content-bj{
        height: 20rem;
        background-color:#fff;
        padding:1rem;
        margin: 1rem;
        border-radius: 0.5rem;
    }
    .content-img{
        width: 100%;
        height: 16rem;
        border-bottom:1px solid rgba(245,245,245,1);
    }
    .content-img img{
        width: 100%;
        height: 15rem;
    }
    .wz{
        width: 100%;
        height: 5rem;
    }
    .wz .wz-title{
        float: left;
        width: 70%;
        margin-top: 1rem;
    }
    .wz .wz-img{
        float:right;
        width: 3.5rem;
        height: 3.5rem;
        background:url(../assets/images/wc-img.png);
        background-size:100%;
        margin-top: 1rem;
    }
    .content1-bottom{
        margin-top:1rem;
        margin-bottom:5rem;
    }
    .content1{
        width: 100%;
        height: 100%;
        background-color:#fff;
    }
    .content1-wz{
        width: 100%;
        height: 7.5rem;
        padding-top: 1.5rem;
    }
    .content1-left{
        width: 31%;
        height: 6rem;
        float: left;
        padding-left: 1.5rem;
    }
    .content1-img{
        display: inline-block;
        width: 8rem;
        height: 6rem;
        background:url(../assets/images/left.png) no-repeat;
        background-size: 100%;
    }
    .content1-right{
        float: right;
        width: 50%;
        height: 6.5rem;
        padding-right:1rem;
    }
    .content1-title{
        font-weight: 600;
        word-break:keep-all;
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        margin-bottom:1.2rem;
    }
    .content1-ms{
        font-size:0.8rem;
        color:rgba(163,163,163,1);
        word-break:keep-all;
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .content1-gd{
        height: 3rem;
        border-bottom: 2px solid rgba(236,236,236,1);
    }
    .content1-gd p{
        float: left;
        font-size: 0.6rem;
        color:rgba(189,189,189,1);
        margin-top: 1.2rem;
    }
    .content1-gd a{
        float: right;
        font-size: 0.8rem;
        margin-top: 1.2rem;
    }
</style>
