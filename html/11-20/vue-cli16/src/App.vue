<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace>Homeeee</router-link>
     <router-link to="/about" tag="button" replace>Abottttt</router-link> -->
     <button @click="homeClick()">首页</button>
     <button @click="aboutClick()">About</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick(){
      this.$router.push('/home')
      console.log('??')
    },
    aboutClick(){
      this.$router.push('/about')
      console.log('!!!')
    }
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
.router-link-active{
  color: red;
}
</style>
