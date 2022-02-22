<template>
 <div class="card text-white bg-light mb-3 design" >
  <div class="card-header bg-secondary">{{piloto.name}}</div>
  <div class="card-body">
    <h5 class="card-title bg-secondary bg-opacity-10 text-info">Features</h5>
    <p class="card-text featureClass">Height: {{piloto.height}}</p>
    <p class="card-text featureClass">Mass: {{piloto.mass}}</p>
    <p class="card-text featureClass">Hair Color{{piloto.hair_color}}</p>
    <p class="card-text featureClass">Skin Color{{piloto.skin_color}}</p>
     <p class="card-text featureClass">Eye Color{{piloto.eye_color}}</p>
  </div>
</div>
</template>

<script>
export default {
    props:['piloto'],
}
</script>

<style>
.design {
    max-width: 45%;
    min-width: 40%;
    padding:20px;
}

.featureClass{
    border-bottom:1px solid grey;
    color:black;
}
</style>

