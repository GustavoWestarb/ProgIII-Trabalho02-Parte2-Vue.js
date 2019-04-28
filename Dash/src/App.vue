<template>
  <div id="app">
    <Dash/>
  </div>
</template>

<script>
import Dash from './components/DashMain'
import { FormValidation } from "./formValidation"

export default {
  name: 'App',
  components: {
    Dash
  }
}
</script>

<!--<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
