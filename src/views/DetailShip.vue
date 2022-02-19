<template>
  <div class="container-fluid">
    <div>
      <img :src="InfoDetailShip()" alt="La imagen de la Nave" />
    </div>
    <div class="card-body">
      <h2 class="title">{{ model }}</h2>
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
    <div class="featuresShips">
      <div>
        <p>Cost in credits:{{ itemShip.cost_in_credits }}</p>
        <p>Atmospheric Speed:{{ itemShip.max_atmosphering_speed }}</p>
        <p>Manufacturer:{{ itemShip.manufacturer }}</p>
        <p>Length:{{ itemShip.length }}</p>
        <p>Crew:{{ itemShip.crew }}</p>
        <p>passengers:{{ itemShip.passengers }}</p>
        <p>cargo_capacity:{{ itemShip.cargo_capacity }}</p>
      </div>
      <div>
        <p>consumables:{{ itemShip.consumables }}</p>
        <p>hyperdrive_rating:{{ itemShip.hyperdrive_rating }}</p>
        <p>MGLT:{{ itemShip.MGLT }}</p>
        <p>starship_class:{{ itemShip.starship_class }}</p>
        <p>created:{{ itemShip.created }}</p>
        <p>edited:{{ itemShip.edited }}</p>
        <p>url:{{ itemShip.url }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShip",
  props: ["model"],
  data() {
    return {
      numItems: 10,
      mytitle: "",
      itemShip: {},
      result: "0",
      urlFinal: "",
    };
  },
  methods: {
    InfoDetailShip() {
      this.itemShip = this.$store.state.info.find((e) => {
        return e.model === this.model;
      });

      return (this.result =
        "https://starwars-visualguide.com/assets/img/starships/5.jpg");
    },
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
