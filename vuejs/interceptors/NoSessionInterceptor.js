import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.interceptors.push((req, next) => {

  next(response => {
    switch (response.status) {
      // usuário não logado
      case 401:
        // força um logout
        console.warn("ação não autorizada");
        break;

      default:
        return response;
        break;
    }
  })

});
