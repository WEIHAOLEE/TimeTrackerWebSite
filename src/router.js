import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/index'
import MainPage from './components/mainPage'
import About from './components/about'
import Account from './components/accountManage'
Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: "/",
            name: "index",
            component: Index,
            children: [    
                {
                    path: "/",
                    name: "mainPage",
                    component: MainPage
                },
                {
                    path: "/about",
                    name: "about",
                    component: About
                },
                {
                    path: "/account",
                    name: "account",
                    component: Account
                }
            ]
        },

    ]
})