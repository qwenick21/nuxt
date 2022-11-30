import Vue from "vue";
import dateFormat from "dateformat";

const tools = {
    install(Vue) {
        Vue.prototype.$dateFormat = dateFormat
    }
}

Vue.use(tools)