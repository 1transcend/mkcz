<template>
    <header>
        <div class="header-left">
            <a class="header-home" href=""></a>
            <p class="header-title">无锡明科财致网络</p>
        </div>
        <div class="header-right">
            <div class="personal"></div>
            <div class="ewm"></div>
            <div class="search"></div>
        </div>
    </header>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style>
    header{
    position:fixed;
    top: 0;
    width: 100%;
    background:rgba(242,242,242,1);
    height: 5rem;
    margin-bottom: 0.8rem;
    }
    .header-left{
        float: left;
        width: 50%;
        height: 100%;
    }
    .header-left .header-home{
        float: left;
        margin-top: 1.45rem;
        margin-right: 0.4rem;
        margin-left: 1rem;
        width: 1.5rem ;
        height: 1.5rem ;
        background:url(../assets/images/home.png);
        background-size: 100%;
    }
    .header-left .header-title{
        float: left;
        margin-top: 1.68rem;
        font-size: 0.8rem;
    }
    .header-right{
        float: right;
        width: 50%;
        height: 100%;
    }
    .header-right .personal{
        float: right;
        width: 1.5rem ;
        height: 1.5rem ;
        margin-top: 1.45rem;
        margin-right: 1rem;
        background:url(../assets/images/personal.png);
        background-size:100%;
    }
    .header-right .ewm{
        float: right;
        width: 1.5rem;
        height: 1.5rem;
        margin-top:1.45rem;
        margin-right: 1rem;
        background:url(../assets/images/ewm.png);
        background-size:100%;
    }
    .header-right .search{
        float: right;
        width: 1.5rem;
        height: 1.5rem;
        margin-top:1.45rem;
        margin-right: 1rem;
        background:url(../assets/images/search.png);
        background-size:100%;
    }
</style>
