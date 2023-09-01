import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import page_menu from './components/menu/home.js'
Vue.component('p-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('p-footer', page_footer)

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)
  
 
import page_novo from './view/novo_projecto/home.js'
Vue.component('p-novo_projecto', page_novo)

import page_novo_mapa from './view/novo_projecto/home_mapa.js'
Vue.component('p-novo_mapa', page_novo_mapa)
 
import page_imovel from './view/imovel/home.js'
Vue.component('p-imovel', page_imovel)
 
import page_bloco from './view/imovel/bloco.js'
Vue.component('p-bloco', page_bloco)

import page_cadastro from './view/imovel/cadastro.js'
Vue.component('p-cadastro', page_cadastro)


import page_usuario from './view/usuario/home.js'
Vue.component('p-usuario', page_usuario)

import page_mensagem from './view/mensagem/home.js'
Vue.component('p-mensagem', page_mensagem)


Vue.use(Router)



const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/novo-projecto', component: { template: '<p-novo_projecto></p-novo_projecto>' } },
    { path: '/novo-mapa', component: { template: '<p-novo_mapa></p-novo_mapa>' } },
    { path: '/perimetragem-imovel', component: { template: '<p-home></p-home>' } },
    { path: '/perimetragem-bloco', component: { template: '<p-bloco></p-bloco>' } },
    { path: '/cadastro-imovel', component: { template: '<p-cadastro></p-cadastro>' } },
    { path: '/novo-usuario', component: { template: '<p-usuario></p-usuario>' } },
    { path: '/nova-mensagem', component: { template: '<p-mensagem></p-mensagem>' } },

]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()