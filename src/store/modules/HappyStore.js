import {getHappyFeelingsData} from './../../data/data.js';

const state = {
    happyFeelings: [],
};

const mutations = {
    'LOAD_HAPPY_FEELINGS'(state, data) {
        state.happyFeelings = data;
    },
};

const actions = {
    loadHappyFeelings: ({commit}) => {
        commit('LOAD_HAPPY_FEELINGS', getHappyFeelingsData);
    },
};

const getters = {
    getHappyFeelings: state => {
        return state.happyFeelings;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};