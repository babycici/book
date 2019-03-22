<template>
    <div class="title">
     {{til}}
    </div>
</template>

<script>
    export default {
        props:['til']
        // $emit
    }
</script>

<style scoped lang='less'>
.title{
    position:fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    background: rgb(142, 142, 209);
    font-size: 0.6rem;
    color: #fff;
    text-align: center;
    line-height: 1.5rem;
}
</style>