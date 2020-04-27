const state = {
    actionsItems: [],
};

const mutations = {
    'LOAD_ACTION_ITEMS'(state, data) {
        state.actionItems = data;
    },
    'SAVE_ACTION_ITEM'(state, data) {
        const record = {
            id: state.actionsItems.length + 1,
            description: data,
            owner: null,
            status: 'PENDING',
        };
        state.actionsItems.push(record);
    },
    'UPDATE_ACTION_ITEM'(state, {id, owner, status}) {
        const record = state.actionsItems.find(element => element.id === id);
        if (record) {
            record.owner = owner;
            record.status = status;
        }
    },
    'DELETE_ACTION_ITEM'(state, id) {
        const record = state.actionsItems.find(element => element.id === id);
        if (record) {
            state.actionsItems.splice(state.actionsItems.indexOf(record), 1);
        }
    },
};

const actions = {
    loadActions: ({commit}) => {
        commit('LOAD_ACTION_ITEMS', []);
    },
    saveAction: ({commit}, actionDescription) => {
        commit('SAVE_ACTION_ITEM', actionDescription);
    },
    updateAction: ({commit}, actionItem) => {
        commit('UPDATE_ACTION_ITEM', actionItem);
    },
    deleteAction: ({commit}, id) => {
        commit('DELETE_ACTION_ITEM', id);
    },
};

const getters = {
    loadActionItems: state => {
        return state.actionsItems;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};