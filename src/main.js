import Vue from 'vue'
import App from './App.vue'
import AppNav from './AppNav.vue'
import SearchBar from './SearchBar.vue'
import Home from './Home.vue'
import Monitoring from './Monitoring.vue'
import AddStudent from './AddStudent.vue'
import Activation from './Activation.vue'
import MonitoringHistory from './History.vue'

import StudentDA from './data_access/StudentDA.vue'


Vue.component('app-nav', AppNav);
Vue.component('app-search-bar', SearchBar);
Vue.component('home', Home)
Vue.component('monitoring', Monitoring)
Vue.component('addstudent', AddStudent)
Vue.component('activation', Activation)
Vue.component('history', MonitoringHistory)

Vue.component('student-da', StudentDA)

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
