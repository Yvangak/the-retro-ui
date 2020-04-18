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
            status: 'PENDING'
        };
        state.happyFeelings.push(feeling);
    },
};

const actions = {
    loadHappyFeelings: ({commit}) => {
        commit('LOAD_HAPPY_FEELINGS', []);
    },
    addHappyFeeling: ({commit}, feelingDescription) => {
        commit('ADD_HAPPY_FEELING', feelingDescription);
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