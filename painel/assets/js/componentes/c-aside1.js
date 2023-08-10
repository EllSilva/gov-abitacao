import get_template from './get_template.js'
import menus from '../vendor/lista-menu.js'

export default {
    data: function () {
        return {
            title: "aside",
            menus,
            lista: [],
            permisao: [],
            permisao2: ['inicio', 'configuracao', 'planos'],
            selecionado: ''
 
        }
    },

    async mounted() {


    },

    created() {
        this.setar()
    },

    methods: {

        setar() {
            var jms = [window.location.href.split('#/')[1]]
            for (var i = 0; i < this.menus.length; i++) {

                if (this.menus[i].id == jms) {
                    globalThis._menu = [window.location.href.split('#/')[1]] 
                    this.selecionado = globalThis._menu
                } else {
                    this.selecionado = globalThis._menu
                }

            }

        },

        async listar() {
            let res = await adm.ListarPerfil(localStorage.getItem('token'))
            return res
        },

        async credenciais() {
            let res = await adm.credencial(this.id)
            return res
        },
        async logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('instituicao_nome')
            localStorage.removeItem('instituicao_id')

            window.location.href = "#/login";
        },

    },

    template: await get_template('./assets/js/componentes/c-aside')
}