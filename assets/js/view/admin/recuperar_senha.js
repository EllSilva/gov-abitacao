import get_template from '../../components/get_template.js'


export default {
    data: function () {
		return {
            email: null, 
            error: null,
			msg: null
        }
    },
	methods: {
        async recuperarSenha() {
		
        },
        
    }, 

    template: await get_template('./assets/js/view/admin/recuperar_senha')
}