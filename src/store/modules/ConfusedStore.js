const state = {
    confusedFeelings: [],
};

const mutations = {
    'LOAD_CONFUSED_DATA'(state, data) {
        state.confusedFeelings = data;
    },
    'ADD_CONFUSED_DATA'(state, feelingDescription) {
        const feeling = {
            id: state.confusedFeelings.length + 1,
            description: feelingDescription,
            author: 'Author Names - ' + state.confusedFeelings.length + 1,
            stars: 1,
            status: 'PENDING',
        };
        state.confusedFeelings.push(feeling);
    },
};

const actions = {
    loadConfusedData: ({commit}) => {
        commit('LOAD_CONFUSED_DATA', []);
    },
    addConfusedFeeling: ({commit}, feelingDescription) => {
        commit('ADD_CONFUSED_DATA', feelingDescription);
    },
};

const getters = {
    getLoadedData: state => {
        return state.confusedFeelings;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};