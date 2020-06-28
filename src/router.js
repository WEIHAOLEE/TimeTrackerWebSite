import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/index'
import MainPage from './components/mainPage'
import About from './components/about'
import Account from './components/accountManage'
import UserPage from './components/userPage'
// import store from './store'
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
                    component: Account,
                    // beforeEnter: (to, from, next) => {
                    //       if(store.state.userInfo||to.name==='account'){
                    //         next();
                    //       }else{
                    //         next({name: 'user'})
                    //       }
                    // }
                },
                {
                    path: "/user/:id",
                    name: "user",
                    component: UserPage,
                    props: true
                },

            ]
        },

    ]
})