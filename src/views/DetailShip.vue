<template>
  <div class="container-fluid">
    <p></p>
    <div>
      <img :src="InfoDetailShip()" alt="La imagen de la Nave" />
    </div>
    <div class="card-body">
      <h2 class="title">{{ getItemShipOnly.model }}</h2>
      <p class="card-text pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, qui
        repellat quos facere sunt perferendis laudantium optio itaque pariatur
        fugit rerum asperiores voluptate vitae fuga, doloremque cupiditate cum
        dolore odit quod dolor aliquam eligendi corrupti voluptatum iusto.
        Optio, cumque similique! Consequuntur magnam neque dolorem harum autem
        totam praesentium voluptate similique mollitia rerum, ad quis enim
        doloribus obcaecati quidem iusto error culpa? Rem, voluptas unde.
        Excepturi necessitatibus officia i.
      </p>
    </div>
    <div class="featuresShips mb-5">
      <div>
        <p>Cost in credits:{{ getItemShipOnly.cost_in_credits }}</p>
        <p>Atmospheric Speed:{{ getItemShipOnly.max_atmosphering_speed }}</p>
        <p>Manufacturer:{{ getItemShipOnly.manufacturer }}</p>
        <p>Length:{{ getItemShipOnly.length }}</p>
        <p>Crew:{{ getItemShipOnly.crew }}</p>
        <p>passengers:{{ getItemShipOnly.passengers }}</p>
        <p>cargo_capacity:{{ getItemShipOnly.cargo_capacity }}</p>
      </div>
      <div>
        <p>consumables:{{ getItemShipOnly.consumables }}</p>
        <p>hyperdrive_rating:{{ getItemShipOnly.hyperdrive_rating }}</p>
        <p>MGLT:{{ getItemShipOnly.MGLT }}</p>
        <p>starship_class:{{ getItemShipOnly.starship_class }}</p>
        <p>created:{{ getItemShipOnly.created }}</p>
        <p>edited:{{ getItemShipOnly.edited }}</p>
        <p>url:{{ getItemShipOnly.url }}</p>
      </div>
    </div>
    <div v-show="flagsPilots" class="border border-3">
      <h3>GRANDES PILOTOS DE ESTA NAVE </h3>
      <div class="d-flex flex-wrap justify-content-around">
       <Pilots  v-for="(itemPilot,index) in getItemShipOnly.pilots"  :key="index" :piloto="itemPilot"/>
      </div>
    </div>


    
  </div>
</template>

<script>
import Pilots from "@/components/Pilots.vue";
import { mapState,mapGetters} from  'vuex'
export default {
  name: "DetailShip",
  components:{
    Pilots,
  },
  data() {  
    return {
      numItems: 10,
      mytitle: "",
      itemShip: {},
      result: "0",
      urlFinal: "",
      pilotsItemsURL:[],
      id:null
    };
  },
  computed: {
       ...mapState(['pilotsItemData','flagsPilots']),
     //      ...mapState(['pilotsItemData']),
       ...mapGetters(['getItemShipOnly'])
          },

  methods: {
     
    goHome() {this.$router.push({path:'/'})},
 
    InfoDetailShip() {
  //     if(!this.model){
  //       console.log('El model es vacio');
  //       this.goHome();
  //  //     console.log(this.$store.state.itemShipModel);

  //    }
    //  else{
    //    console.log("Guardamos el modelo");
    //    this.$store.commit("SET_ITEM_SHIP_MODEL",this.model)
    //  }

     // console.log(this.$store.state.itemShipModel)




      // this.itemShip = this.$store.state.info.find((e) => {
         
      //    return e.model === this.model;
      // });

      // console.log('APA1.-' + this.itemShip['pilots'].length);
      // if(this.$store.state.flagsPilots)
      //   this.$store.dispatch("GET_ALLITEMSPILOTS",this.getItemShipOnly.pilots );
       

      return (this.result =
        "https://starwars-visualguide.com/assets/img/starships/5.jpg");
    },
    
  }, //mounted beforeMount
  mounted() {
    console.log("Estamos montando");
     this.id = this.$route.params.id;
     console.log(this.id);
     this.$store.dispatch("GET_ITEMSHIP",this.id );
    },
};
</script>
<style scoped>
.container-fluid * {
  color: #9c9998;
}

p {
  font-size: 1.3rem;
  color: white;
}

.shipElement {
  background: black;
}

div > img {
  width: 100%;
  height: 60vh;
  margin-top: 0.8rem;
  margin-bottom: 1.8rem;
  border-bottom: 1px solid red;
}

.title {
  text-transform: uppercase;
}

.card-body > p,
.title,
.featuresShips > div>p {
  text-align: left;
}

.featuresShips > div {
  width: 50%;
}

.featuresShips {
  width: 100%;
  padding-left: 1rem;   
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
