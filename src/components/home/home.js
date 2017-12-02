export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [{texto:'oi', id:1},{texto:'olsal', id:2}],
      msg: 'Welcome to Your Vue.js App',
      search:''
    }
  },
  computed:{
    filter:function () {
      return this.items.filter((busca) => {
        return busca.texto.match(this.search);
      })
    }
  }
}
