import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from "@/api";
import { fetchAskList } from "@/api";
import { fetchJobsList } from "@/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data)
                    context.commit('SET_NEWS', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_ASK', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_JOBS', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})
