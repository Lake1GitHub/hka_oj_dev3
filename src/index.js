import Vue from 'vue';
import Content from './index.vue';
var vm = new Vue({
  el: '#content',
  components: {Content},
  template: '<Content/>'
})