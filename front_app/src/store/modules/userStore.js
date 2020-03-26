
// initial state
const state = {
    id : '',
    email : '',
    password : '',
    phone : ''
}

const getters = {
    getId (state) { return state.id },
    getEmail (state) { return state.email },
    getPhone (state) { return state.phone } 
}

const mutations = {
    // payload : {id, email, password, phone}
    loadUser (state, payload) {
        state.id = payload.id,
        state.email = payload.email,
        state.password = payload.password,
        state.phone = payload.phone
    }
}

/*
const actions = { }
*/

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
