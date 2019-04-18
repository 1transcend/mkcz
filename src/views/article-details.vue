<template>
    <div id="app">
        <Header/>

        <div class="nav">
            <p class="nav-title">倔金新营销---微信小程序</p>
            <p class="nav-wl">明科财致网络</p>
            <p class="nav-gs">无锡明科财致网络科技有限公司</p>
            <p class="nav-time">{{info.add_time}}</p>
        </div>

        <div class="content">
            <p class="content-text" v-html="info.content"></p>
            <!-- <div class="content-img">
                <img src="../assets/images/wz-img.png" alt="文章图片">
            </div> -->
        </div>

        <Footer/>
    </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
    components:{
        Footer,
        Header
    },
    data(){
        return{
            info : []
        }  
    },
    created(){
        this.axios.get("http://39.105.94.90/wxmkczgw/phone.php?app=article&act=articleDetail&id="+this.$route.query.id,{
        })
        .then((res)=>{
            // console.log(this.$route.query.id);
            // console.log(res['data']['info'][0]);
            this.info = res['data']['info'][0]
        })
    }
}
</script>

<style >
    #app{
        background:rgba(235, 235, 235, 1);
        position: relative;
    }
    .nav{
        width: 100%;
        height: 8.5rem;
        background-color:#fff;
        padding-top:0.1rem;
        border-bottom:2px solid rgba(235, 235, 235, 1);
        margin-top:5rem;
    }
    .nav p{
        margin:1rem;
    }
    .nav .nav-title{
        font-size:1.4rem;
    }
    .nav .nav-wl{
        color:rgba(219,219,219,1);
    }
    .nav .nav-gs{
        float: left;
        color:rgba(103,122,161,1);
        margin:0;
        padding:0 1rem;
        font-size:0.8rem;
    }
    .nav .nav-time{
        float: left;
        color:rgba(219,219,219,1);
        margin:-0.1rem 0 0 0;
    }

    .content{
        background-color: #fff;
        width: 100%;
        height: 100%;
        margin-bottom:5rem;
    }
    .content .content-text{
        margin:0;
        padding:1rem;
        letter-spacing:0.2rem;
        line-height: 1.4rem;
    }
    .content img{
        width:95%;
    }
</style>
