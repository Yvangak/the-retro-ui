import {getSadFeelingsData} from './../../data/data.js';

const state = {
    sadFeelingsList: [],
};

const mutations = {
    'LOAD_SAD_FEELINGS'(state, data) {
        state.sadFeelingsList = data;
    },
};

const actions = {
    loadSadFeelingsData: ({commit}) => {
        commit('LOAD_SAD_FEELINGS', getSadFeelingsData);
    },
};

const getters = {
    getSadFeelings: state => {
        return state.sadFeelingsList;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};