import serviceDribbbleApi  from '../../service/serviceDribbble.js'

export default {
  props:['search', 'sizeGrid', 'favorites'],
  data() {
    return {
      shots: [],
      pagina: 1,
      loader: false,
      idShotShowText: false,
      tamanhoPage:40,
    }
  },
  methods: {
    get(pagina, route) {
      return serviceDribbbleApi.get(route, {page:pagina, per_page:this.tamanhoPage} );
    },
    endScrool(){
      let pageHeightAndScrool = Math.round(window.innerHeight) + Math.round(window.scrollY);
      let heightApp = Math.round(document.getElementById('app').clientHeight);
      return pageHeightAndScrool === heightApp;
    },
    handleScroll(){

      if(this.endScrool() && this.shots.length >= this.tamanhoPage){
        this.loader = true;
        this.pagina = this.pagina + 1;
        if(this.favorites){
          var aux = [];
          this.get(this.pagina , 'user/likes').then(response =>{
            this.getArrayFavorites(response.data, aux);
            this.addShotsPage(aux);
          });
        }else{
          this.get(this.pagina , 'shots').then(response =>{
            this.addShotsPage(response.data);
          });
        }
      }
    },
    addShotsPage(array){
      this.shots = this.shots.concat(array);
      this.loader = false;
    },
    setIdShowText(id){
      this.idShotShowText = id;
    },
    checkIdShowText(id){
      return this.idShotShowText === id;
    },
    setFalseIdShowText(){
      this.idShotShowText =false;
    },
    getArrayFavorites(array, aux){
      array.forEach(function (value) {
        aux.push(value.shot);
      });
    }
  },
  mounted:function () {
    this.get(this.pagina, 'shots').then(response =>{
      this.shots = response.data;
    });
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed:{
    filterShotes:function () {
      return this.shots.filter((search) => {
        return search.title.toUpperCase().match(this.search.toUpperCase());
      })
    }
  },
  watch:{
    favorites:function (newValue, oldValue) {
      this.shots = [];
      this.pagina = 1;
      if(newValue === true){
        var aux = [];
        this.get(this.pagina, 'user/likes').then(response =>{
          this.getArrayFavorites(response.data, aux);
          this.shots = aux;
        });
      }else{
        this.get(this.pagina, 'shots').then(response =>{
          this.shots = response.data;
        });
      }
    }
  }
}
