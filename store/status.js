export const state = () => ({
    readonly: false,
    addFlag: true,
    page: 1
})

export const mutations = {
    SET_ADDFLAG(state, payload) {
        state.addFlag = payload
    },
    SET_READONLY(state, payload) {
        state.readonly = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    }
}

export const actions = {
    setAddFlag({ commit }, boolean) {
        commit("SET_ADDFLAG", boolean)
    },
    setReadonly({ commit }, boolean) {
        commit("SET_READONLY", boolean)
    },
    setPage({ commit }, index) {
        commit("SET_PAGE", index)
    }
}