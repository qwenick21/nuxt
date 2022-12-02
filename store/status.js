export const state = () => ({
    readonly: false,
    addFlag: true,
    route: '/',
})

export const mutations = {
    SET_ADDFLAG(state, payload) {
        state.addFlag = payload
    },
    SET_READONLY(state, payload) {
        state.readonly = payload
    },
    SET_ROUTE(state, payload) {
        state.route = payload
    }
}

export const actions = {
    setAddFlag({ commit }, boolean) {
        commit("SET_ADDFLAG", boolean)
    },
    setReadonly({ commit }, boolean) {
        commit("SET_READONLY", boolean)
    },
    setRoute({ commit }, string) {
        commit("SET_ROUTE", string)
    }
}