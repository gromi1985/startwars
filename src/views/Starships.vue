<template>
    <div class="container mb-5">
    
      <div v-for = "(item, index) in info" 
                      :key="index" 
                      class='regItems d-flex flex-column align-items-left ps-4' 
                      @click="Detailship(item.model)">
        <p class="itemFirst py-2">{{item.name}}</p>
        <p class="itemSecond py-2">{{item.model}}</p>
      </div>
    </div>
</template>


<script>
 import {mapActions,mapState} from  'vuex'
export default {
  
  computed: {
      ...mapState(['info']),
    },
  methods: {
    ...mapActions(['GET_ITEMSHIP']),
    Detailship(model){  
      this.$router.push({ name: 'DetailShip', params:{model:model}});                                                 
      },
 
    scroll(){
      window.onscroll = () => {
        let sumaSizes = Math.round(document.documentElement.scrollTop + window.innerHeight);
        let limitDown = document.documentElement.offsetHeight - 1;
        let limitUp = document.documentElement.offsetHeight + 1;
        let bottomOfWindow = sumaSizes > limitDown && sumaSizes < limitUp
        console.log(bottomOfWindow);
        if (bottomOfWindow ) {
          this.$store.dispatch("GET_ITEMSHIP");
        }
       
      };
      }
  },

 
    /* beforeMount() {
       this.$store.dispatch("GET_ITEMSHIP");
       window.addEventListener('scroll',this.scroll()); 

     },*/
   mounted() {
      this.$store.dispatch("GET_ITEMSHIP");
      this.scroll();
    },

    
  
  } 

</script>

<style scoped>
.regItems{
    background:#161515;
    margin:10px;
    padding:.3rem;
    color:#9C9998;

}
.regItems>.itemFirst{
    font-size:20px;
    text-transform: uppercase;
    text-align:left;
}
.regItems>.itemSecond{
    font-size:.9rem;
    color:#FBF8F1;
    text-align:left;
}
p{
    margin:0;
}

</style>