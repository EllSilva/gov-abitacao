import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'

import { mapState } from './vendor/vuex.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import header from './componentes/c-header.js'
Vue.component('c-header', header)

import aside from './componentes/c-aside.js'
Vue.component('c-aside', aside)

import mensagem from './componentes/c-mensagem.js'
Vue.component('c-mensagem', mensagem)

import loading from './componentes/c-loading.js'
Vue.component('c-loading', loading)


import validacao from './componentes/c-validacao.js'
Vue.component('c-validacao', validacao)

import detalhe from './componentes/c-detalhe.js'
Vue.component('c-detalhe', detalhe)

import dash from './views/dash.js'
Vue.component('c-dash', dash)
 
const app = new Vue({

    store,
    // scriptsbundle,
    router,
    data: {},
    computed: {},
    methods: {},



}).$mount('#app')


