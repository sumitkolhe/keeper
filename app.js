const app = new Vue({
  el:'#app',
  data:{
    store:''
  },
  mounted() {
    if(localStorage.store) this.store = localStorage.store;
  },
  watch:{
    store(newstore) {
      localStorage.store = newstore;
    }
  }
})