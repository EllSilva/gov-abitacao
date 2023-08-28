// IMPORTANDO VUE E VUE ROUTER
import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

// Vue.use(window.vuelidate.default)
// Vue.use(VueMask.VueMaskPlugin);
 
// IMPORTANDO PÁGINAS
import page_cadastrar from './view/admin/cadastrar.js'
Vue.component('p-cadastrar', page_cadastrar)

import page_login from './view/admin/home.js'
Vue.component('p-login', page_login)

import page_recuperar_senha from './view/admin/recuperar_senha.js'
Vue.component('p-recuperar_senha', page_recuperar_senha)
 
// CONFIGURAÇÃO DAS ROTAS
Vue.use(Router)

const routes = [ 
    { path: '/', component: { template: '<p-login></p-login>' } },
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
            if (window.location.hash == `#/`) {
                window.location.href = `#/`
            }
            window.location.href = `painel/index.html#/`
        } else {
            window.location.href = `#/`
        }


    },
}).$mount('#app')
    ; (async () => { })()