import serviceDribbbleApi  from '../../service/serviceDribbble.js'

export default {
  name: "headerApp",
  data(){
      return {
        user: {}
      }
  },
  mounted() {
    serviceDribbbleApi.get('user').then(response =>{
      this.user = response.data;
    })
  }
}
