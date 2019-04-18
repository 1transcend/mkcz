<template>
    <footer>
        <router-link to="/">
        <div class="sy">
            <img src="../assets/images/sy.png" alt="首页">
            <a href="">首页</a>
        </div>
        </router-link>

        <router-link to="/product">
        <div class="cp">
            <img src="../assets/images/cp.png" alt="产品">
            <a href="">产品</a>
        </div>
        </router-link>

        <router-link to="/article">
        <div class="xw">
            <img src="../assets/images/xw.png" alt="新闻">
            <a href="">新闻</a>
        </div>
        </router-link>

        <router-link to="">
        <div class="wd">
            <img src="../assets/images/wd.png" alt="我的">
            <a href="">我的</a>
        </div>
        </router-link>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    footer{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 5rem;
        background-color:#fff;
        border-top: 2px solid rgba(236,236,236,1);
    }
    footer div{
        margin-top: 1rem;
        width: 23%;
        float: left; 
        margin-left:0.8rem;
    }
    footer div a{
        display: block;
        margin-top:0;
    }
    footer .sy{
        margin-left:1.5rem;
    }
    footer .cp img{
        margin-left:0.3rem;
    }
    footer .wd{
        margin-top:1.18rem;
        width: 10%;
    }
</style>
