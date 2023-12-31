import Vue from 'vue';
// import AppPostList from './AppPostList.vue'
import AppPostListVue from './AppPostList.vue';
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: (h) => h(AppPostListVue),
}).$mount('#app');
