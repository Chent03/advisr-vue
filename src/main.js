import Vue from 'vue';
import VueRouter from 'vue-router';
import * as VueGoogleMaps from 'vue2-google-maps';

import store from './store';
import App from './App';
import BusinessList from './components/BusinessList';
import Business from './components/Business';

Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_API,
        libraries: "places"
    }
});


export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: BusinessList },
        { path: '/business', component: Business}
    ]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')