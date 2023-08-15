import get_template from '../../components/get_template.js'
import api from "../../../../static/js/api/adm.js"


export default {
    data: function () {
      return {
        email: null,
        password: null,
        error: null,
        msg: null,
      };
    },
  
    methods: {
      async voltar() {
        window.location.href = `#/`;
      },
  
      async logar() {
        this.error = null;
  
        // localStorage.removeItem('token')
        let res = await api.login(this.email, this.password);
  
        if (res.error) {
          this.error = res.message;
          iziToast.error({
            title: "Error",
            message: this.error,
            position: "bottomCenter",
          });
          return null;
        }
  
        this.msg = res.message;
        iziToast.success({
          title: "OK",
          message: this.msg,
          position: "bottomCenter",
        });
        localStorage.setItem("token", res.token.token);
        localStorage.setItem("code", res.usuario.id);
        window.location.href = 'painel/index.html#/' 
      },
    },

    template: await get_template('./assets/js/view/admin/home')
}