const state = {
    sadFeelingsList: [],
};

const mutations = {
    'LOAD_SAD_FEELINGS'(state, data) {
        state.sadFeelingsList = data;
    },
    'ADD_SAD_FEELING'(state, feelingDescription){
        const feeling ={
            id: state.sadFeelingsList.length+1,
            description: feelingDescription,
            author: 'Author Names - ' + state.sadFeelingsList.length +1,
            stars: 1,
            status: 'PENDING'
        };
        state.sadFeelingsList.push(feeling);
    }
};

const actions = {
    loadSadFeelingsData: ({commit}) => {
        commit('LOAD_SAD_FEELINGS', []);
    },
    addSadFeeling: ({commit}, feelingDescription)=>{
        commit('ADD_SAD_FEELING', feelingDescription);
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