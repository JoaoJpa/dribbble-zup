import Shots from '../shots/shots.vue'

export default {
  name: 'home',
  data () {
    return {
      sizes:[{text:'small', size:3, height:'200px'},
        {text:'medium', size:4, height:'250px'},
        {text:'large', size:6, height:'300px'},
        {text:'x-large', size:12, height:'400px'}],
      search:'',
      teste:'',
      size: {},
      colorFavorite: 'grey',
      favorite: false
    }
  },
  methods: {
    setSizeGrid(size) {
      this.size = this.sizes.filter(function(value){
        return value.text === size;
      })[0];
    },
    setFavorite(){
      this.colorFavorite = this.colorFavorite === 'grey' ? 'red': 'grey';
      this.favorite = this.favorite === false ? true : false;
    }
  },
  components: {
    shots: Shots,
  },
  mounted() {
    this.setSizeGrid('small');
  }
}
