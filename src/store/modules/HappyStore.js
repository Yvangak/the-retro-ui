const state = {
    happyFeelings: [],
};

const mutations = {
    'LOAD_HAPPY_FEELINGS'(state, data) {
        state.happyFeelings = data;
    },
    'ADD_HAPPY_FEELING'(state, feelingDescription) {
        const feeling = {
            id: state.happyFeelings.length + 1,
            description: feelingDescription,
            author: 'Author Names - ' + state.happyFeelings.length + 1,
            stars: 1,
            status: 'PENDING',
        };
        state.happyFeelings.push(feeling);
    },
    'UPDATE_HAPPY_FEELING'(state, feeling) {
        const record = state.happyFeelings.find(
                item => item.id === feeling.id,
        );
        if (record) {
            record.stars = feeling.stars;
            record.status = feeling.status;
        }
    },
    'DELETE_HAPPY_FEELING'(state, feeling) {
        const record = state.happyFeelings.find(
                item => item.id === feeling.id,
        );
        if (record) {
            state.happyFeelings.splice(state.happyFeelings.indexOf(record), 1);
        }
    },
};

const actions = {
    loadHappyFeelings: ({commit}) => {
        commit('LOAD_HAPPY_FEELINGS', []);
    },
    addHappyFeeling: ({commit}, feelingDescription) => {
        commit('ADD_HAPPY_FEELING', feelingDescription);
    },
    updateHappyFeeling({commit}, feeling) {
        commit('UPDATE_HAPPY_FEELING', feeling);
    },
    deleteHappyFeeling({commit}, feeling) {
        commit('DELETE_HAPPY_FEELING', feeling);
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