import {fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(({ data }) => {
                console.log(data)
                commit('SET_NEWS', data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error)
            })
    }
}
