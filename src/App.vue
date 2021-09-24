<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- 在Vue的模板中,如果需要使用已导入的组件,那么组件名就是标签名。直接定义标签.就是使用组件 -->
    <!--<HelloBjsxt title="一个程序员的自白" v-bind:version="1.0"></HelloBjsxt>-->
    <router-view/>
  </div>
</template>

<script>
//在 VUE中,所有定义的资源，必须使用。不使用的，已定义的资源,都是错误语法。
//import HelloWorld from './components/HelloWorld.vue'

//在App核心组件中,如果需要使用其他组件,使用import语法导入组件
//如果导入的是.vue组件,可以省略后缀名
//import HelloBjsxt from "./components/HelloBjsxt.vue"
export default {
  name: 'App',  //当前组件的命名
  components: { //定义当前的核心组件中,都导入了什么组件。导入的组件必须在此定义
    //HelloWorld
    //HelloBjsxt

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
