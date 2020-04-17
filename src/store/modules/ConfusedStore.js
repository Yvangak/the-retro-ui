import {getConfusedFeelingsData} from '../../data/data.js';

const state = {
    confusedFeelings: [],
};

const mutations = {
    'LOAD_CONFUSED_DATA'(state, data) {
        state.confusedFeelings = data;
    },
};

const actions = {
    loadConfusedData: ({commit}) => {
        commit('LOAD_CONFUSED_DATA', getConfusedFeelingsData);
    },
};

const getters = {
    getLoadedData: state => {
        return state.confusedFeelings;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}