import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home"
        } 
        
    },

    methods:{
         
    },

    
    template: await get_template('./assets/js/view/mensagem/home')
}
 