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
    'UPDATE_CONFUSED_DATA'(state, data) {
        const record = state.confusedFeelings.find(
                item => item.id === data.id,
        );
        if (record) {
            record.stars = data.stars;
            record.status = data.status;
        }
    },
    'DELETE_CONFUSED_DATA'(state, data) {
        const record = state.confusedFeelings.find(
                item => item.id === data.id,
        );
        if (record) {
            state.confusedFeelings.splice(
                    state.confusedFeelings.indexOf(record), 1);
        }
    },
};

const actions = {
    loadConfusedData: ({commit}) => {
        commit('LOAD_CONFUSED_DATA', []);
    },
    addConfusedFeeling: ({commit}, feelingDescription) => {
        commit('ADD_CONFUSED_DATA', feelingDescription);
    },
    updateConfusedFeeling: ({commit}, data) => {
        commit('UPDATE_CONFUSED_DATA', data);
    },
    deleteConfusedFeeling: ({commit}, data) => {
        commit('DELETE_CONFUSED_DATA', data);
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