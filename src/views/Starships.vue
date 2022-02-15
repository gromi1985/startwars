<template>
    <div class="container">
    <shipItem v-for = "(item, index) in info" 
                      :key="index" 
                      :shipInfo="item">
                      
      <div class='regItems d-flex flex-column align-items-left ps-4' @click="Detailship(item.model)">
        <p class="itemFirst py-2">{{item.name}}</p>
        <p class="itemSecond py-2">{{item.model}}</p>
      </div>
    </shipItem>
  </div>
</template>


<script>
import axios from 'axios'

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
    
    addNewRequest(){
              console.log('ANA3');

      this.$store.state.ItemAddInfo = this.info;
                    console.log('APA4'+this.info);
                                        console.log('APA4'+this.$store.state.info);


      this.$store.dispatch('AddInfoShipsAction');
    },
    
    getInitialUsers () 
    {
      axios
      .get('https://swapi.dev/api/starships')
      .then(response => {(this.info = response.data.results)
        console.log('ANA1');
        this.addNewRequest();
                console.log('ANA2');

        })
      .catch(error=>console.warn(error));
    console.log( this.info );
    },

    scroll(){
      this.isLoading = true;

      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow ) {
          axios.get(`https://swapi.dev/api/starships/?page=`+ ++(this.page))
            .then(response => { this.info.push(...response.data.results);
              console.log(this.info)
            });
        }
        this.isLoading = false;
      };
    },

    
    
  },
    beforeMount() {
      this.getInitialUsers();
     },
    mounted() {
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