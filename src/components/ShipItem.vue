<template>
<div class="regItems d-flex flex-column align-items-left ps-4" @click="Detailship">
   <p class="itemFirst py-2" :dataF="ObtainDatailShip()">{{shipName}}</p>
   <p class="itemSecond py-2" :dataF="ObtainDatailShip()">{{shipModel}}</p>
</div>
</template>

<script>

export default {
    name: 'ShipItem',
    props :['shipInfo'],
    data(){
        return {
            numItems : 10,
            shipName:'',
            shipModel:'',
        }
    },
    methods:{
        ObtainDatailShip(){
            this.shipName= this.shipInfo.name;
            this.shipModel=this.shipInfo.model;
        }   ,
        Detailship(){  
            this.$router.push({ name: 'DetailShip', params:{model:this.shipInfo.model}});                                                 
        }
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