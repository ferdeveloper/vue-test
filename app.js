new Vue({
  el: '#app',
  data () {
    return {
      isExpanded: false,
      info: null
    }
  },
  mounted () {
    axios
      .get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(response => (this.info = response.data))
  },
  methods: {
    toggleClass: function(event){
      this.isExpanded = !this.isExpanded
    }
  }
});
