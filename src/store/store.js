import Vue from 'vue';
import Vuex from 'vuex';

import happyStore from './modules/HappyStore';
import confusedStore from './modules/ConfusedStore';
import sadStore from './modules/SadStore';
import actionsStore from './modules/ActionsStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        happyStore,
        confusedStore,
        sadStore,
        actionsStore
    }
});