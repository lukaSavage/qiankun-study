<!--
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2023-01-15 14:16:54
 * @LastEditors: lukasavage
 * @LastEditTime: 2023-01-15 14:57:35
 * @FilePath: \qiankun-study\singleSpa\vue-app\src\components\HelloWorld.vue
-->
<template>
    <div class="hello">
        <h1>哈哈哈，我终于成功了</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
