import {fetchAskList, fetchItemInfo, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    // Promise 방식
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data)
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // Async 방식
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_ASK({ commit }) {
        try {
            const response = await fetchAskList();
            commit('SET_ASK', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        console.log(4);
        commit('SET_LIST', response.data);
        return response;
    }
}

