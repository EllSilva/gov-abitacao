// IMPORTANDO VUE E VUE ROUTER
import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

// IMPORTANDO COMPONENTES
import header from './components/c-header.js'
Vue.component('c-header', header)

import aside from './components/c-aside.js'
Vue.component('c-aside', aside)

import detalhe from './components/c-detalhe.js'
Vue.component('c-detalhe', detalhe)

import mensagem from './components/c-mensagem.js'
Vue.component('c-mensagem', mensagem)

// IMPORTANDO PÁGINAS
import page_login from './view/admin/home.js'
Vue.component('p-login', page_login)

import page_recuperar_senha from './view/admin/recuperar_senha.js'
Vue.component('p-recuperar_senha', page_recuperar_senha)


// CONFIGURAÇÃO DAS ROTAS
Vue.use(Router)

const routes = [
    { path: '/login', component: { template: '<p-login></p-login>' } },
    { path: '/recuperar_senha', component: { template: '<p-recuperar_senha></p-recuperar_senha>' } },

]

const router = new Router({ routes })

// CONFIGURAÇÃO DO APP
new Vue({
    router,
    data: {},
    computed: {},
    methods: {},
    mounted() {
        let is_token = localStorage.getItem('token')
        if (is_token) {
            if (window.location.hash == `#/login`) {
                window.location.href = `#/`
            }
        } else {
            window.location.href = `#/login`
        }


    },
}).$mount('#app')
    ; (async () => { })()