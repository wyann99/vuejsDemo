<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HomeHeader :logo="logoMsg"></HomeHeader>
    <!-- <router-view></router-view> -->
    <Login @transferUser="getUser"></Login>
    <p>用户名：{{user}}</p>

  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import Login from './components/login'

  export default {
    name: 'app',
    data () {
      return {
        logoMsg: 'WMM',
        user: ''
      }
    },
    methods: {
      getUser (msg) {
        this.user = msg
      }
    },
    components: {
      HomeHeader,
      Login
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
