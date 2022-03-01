<!--
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2022-02-28 22:04:33
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-02-28 22:59:55
-->
<template>
    <div id="app">
        <router-link to="/vue">加载vue应用</router-link>
        <!-- 子应用加载的位置 -->
        <div id="vue"></div>
    </div>
</template>

<script>

export default {
    name: 'App'
}
</script>

<style>
</style>
