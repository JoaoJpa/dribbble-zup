import DribbbleApi  from '../../service/DribbbleApi.js'

export default {
  props:['search'],
  data() {
    return {
      cards: [
        { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 6 }
      ],
      params: {}
    }
  },
  methods: {
    montarDados: function() {
      DribbbleApi.getShots({page:1, per_page:50}).then(response =>{
        console.log(response);
      })
    }
  },
  computed:{
    filter:function () {
      return this.cards.filter((busca) => {
        return busca.title.match(this.search);
      })
    }
  }
}
