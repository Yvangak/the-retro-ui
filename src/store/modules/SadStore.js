const state = {
    sadFeelingsList: [],
};

const mutations = {
    'LOAD_SAD_FEELINGS'(state, data) {
        state.sadFeelingsList = data;
    },
    'ADD_SAD_FEELING'(state, feelingDescription) {
        const feeling = {
            id: state.sadFeelingsList.length + 1,
            description: feelingDescription,
            author: 'Author Names - ' + state.sadFeelingsList.length + 1,
            stars: 1,
            status: 'PENDING',
        };
        state.sadFeelingsList.push(feeling);
    },
    'UPDATE_SAD_FEELING'(state, data) {
        const record = state.sadFeelingsList.find(
                item => item.id === data.id,
        );
        if (record) {
            record.stars = data.stars;
            record.status = data.status;
        }
    },
    'DELETE_SAD_FEELING'(state, data) {
        const record = state.sadFeelingsList.find(
                item => item.id === data.id,
        );
        if (record) {
            state.sadFeelingsList.splice(
                    state.sadFeelingsList.indexOf(data), 1,
            );
        }
    },
};

const actions = {
    loadSadFeelingsData: ({commit}) => {
        commit('LOAD_SAD_FEELINGS', []);
    },
    addSadFeeling: ({commit}, feelingDescription) => {
        commit('ADD_SAD_FEELING', feelingDescription);
    },
    updateSadFeeling: ({commit}, data) =>{
        commit('UPDATE_SAD_FEELING', data);
    },
    deleteSadFeeling: ({commit}, data) => {
        commit('DELETE_SAD_FEELING', data);
    }
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