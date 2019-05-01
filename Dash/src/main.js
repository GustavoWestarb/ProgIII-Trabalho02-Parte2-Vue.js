// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'
import App from './App'
import AppLogin from './AppLogin'


Vue.use(VueMaterial)
Vue.use(VueCookies)
Vue.use(VueSession)

Vue.config.productionTip = false

const NotFound = { template: '<p>Página não encontrada</p>' }
const Home = { components: { App }, template: '<App/>' }
const Login = { components: { AppLogin }, template: '<AppLogin/>'}

const routes = {
  '/': Home,
  '/login': Login
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      if(this.currentRoute == "/"){
        if(this.$session.get("login") == undefined){
          return routes["/login"]
        }
        else{
          return routes["/"]
        }
      }
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})