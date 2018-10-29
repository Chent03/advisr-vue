import Vuex from 'vuex';
import Vue from 'vue';

import business from './modules/business';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        business
    }
})