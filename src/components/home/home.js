import Shots from '../shots/shots.vue'
import Header from '../header/header.vue'
import Footer from '../footer/footer.vue'

export default {
  name: 'home',
  data () {
    return {
      search:''
    }
  },
  components: {
    shots: Shots,
    headerApp: Header,
    footerApp: Footer
  }
}
