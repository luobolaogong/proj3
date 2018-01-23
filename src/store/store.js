import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
// console.log("In store.js");
export const store = new Vuex.Store({
    state: {
        theMap: null
    },
    getters,
    mutations,
    actions
});
// console.log("Leaving store.js");
