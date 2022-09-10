import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import JobsView from "@/views/JobsView";
import AskView from "@/views/AskView";
import NewsView from "@/views/NewsView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            // component: createListView('NewsView'),
            components: NewsView,
            // beforeEnter: (to, from, next) => {
            //     bus.$emit('start:spinner');
            //     store.dispatch('FETCH_LIST', to.name)
            //         .then(() => {
            //             next();
            //         })
            //         .catch((error) => {
            //             console.log(error);
            //         });
            // }
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView'),
            components: AskView,
            // beforeEnter: (to, from, next) => {
            //     bus.$emit('start:spinner');
            //     store.dispatch('FETCH_LIST', to.name)
            //         .then(() => next())
            //         .catch((error) => {
            //             console.log(error);
            //         });
            // }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView'),
            components: JobsView,
            // beforeEnter: (to, from, next) => {
            //     bus.$emit('start:spinner');
            //     store.dispatch('FETCH_LIST', to.name)
            //         .then(() => next())
            //         .catch((error) => {
            //             console.log(error);
            //         });
            // }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});
