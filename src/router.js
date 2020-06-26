import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/index'
import Register from './components/register'
Vue.use(Router);

export default new Router({
    mode:'hash',
    routes:[
        {
            path:"/",
            name:"index",
            component:Index,
        },
        {
            path:"/reg",
            name:"register",
            component:Register
        }
    ]
})