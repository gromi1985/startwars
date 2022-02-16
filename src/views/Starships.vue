<template>
    <div class="container">
    <!-- <div v-for = "(item, index) in getInfoTwo" 
                      :key="index" > -->
     
      <div v-for = "(item, index) in getInfoTwo" 
                      :key="index" 
                      class='regItems d-flex flex-column align-items-left ps-4' 
                      @click="Detailship(item.model)">
        <p class="itemFirst py-2">{{item.name}}</p>
        <p class="itemSecond py-2">{{item.model}}</p>
      </div>
    </div>
  <!-- </div> -->
</template>


<script>
import {mapGetters} from  'vuex'
export default {

    data () {
        return {
        info: null,
        page:'1',
        isLoading : false,
    }
  },
 
  methods: {
     Detailship(model){  
            this.$router.push({ name: 'DetailShip', params:{model:model}});                                                 
        },
 
    scroll(){
      this.isLoading = true;

      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow ) 
          this.$store.dispatch("GET_ITEMSHIP");
      };
      }
    },
    computed: {
      ...mapGetters (['getInfo']),
      getInfoTwo(){
        return this.$store.getters.getInfo;
      }
    },
    
 
    // beforeMount() {
    //   this.$store.dispatch("GET_ITEMSHIP");
    // },
    mounted() {
      this.$store.dispatch("GET_ITEMSHIP");
      window.addEventListener('scroll',this.scroll()); 
    }

  
  
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