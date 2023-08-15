import get_template from '../../components/get_template.js'
import api from "../../../../static/js/api/adm.js"


export default {
  data: function () {
    return {

      nome: null,
      sobrenome: null,
      email: null,
      password: null,
      conf_password: null,
      cargo: null,
      error: null,
      msg: null,
    };
  },


  methods: {

    async cadastra() {
      this.error = null;

      // localStorage.removeItem('token')
      let res = await api.cadastrar(this.nome, this.sobrenome, this.email, this.password, this.cargo);

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
      window.location.href = '#/login'
    },

  },

  template: await get_template('./assets/js/view/admin/cadastrar')

}