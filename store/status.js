export const state = () => ({
    readonly: false,
    addFlag: false,
})

export const mutations = {
    SET_ADDFLAG(state, payload) {
        state.addFlag = payload
    },
    SET_READONLY(state, payload) {
        state.readonly = payload
    },
}

export const actions = {
    setAddFlag({ commit }, boolean) {
        commit("SET_ADDFLAG", boolean)
    },
    setReadonly({ commit }, boolean) {
        commit("SET_READONLY", boolean)
    },
}