const state = {
    messages: []
}
const getters = {
    messages: state => {
        return state.messages
    }
}
// actions
const actions = {
    addMessage ({ commit }, message) {
        commit('addMessage', message)
    },
    removeMessage ({ commit }) {
        commit('removeMessage')
    }
}
// mutations
const mutations = {
    addMessage (state, message) {
        state.messages.push(message)
    },
    removeMessage(state) {
        state.messages.pop();
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}