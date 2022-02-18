<template>
  <div :id="idElement" class="elementItem">
    <label>
      <span v-show="!(esActivateFocus || esActivateOninput) && esActivateBlur"> {{headTitle}} </span>
      <input
        id="firstName"
        type="text"
        name="firstName"
        @blur='blurEmit'
        @focus='focusEmit'
        @input='oninputEmit'
        autocomplete="off"
        required
        :class="{focus: esActivateFocus, 
                  blur: esActivateBlur,
                  oninput:esActivateOninput}"
      />
    </label>
    <span :class="[{blur:esActivateBlur,
                    oninput:esActivateOninput},'text-start']" 
           v-if="esActivateBlur">Please enter your {{headTitle}}</span>

  </div>
</template>

<script>
export default {
  name: "InputElement",
  props:['idElement','headTitle','flagEvents'],
  data(){
    return{
      esActivateFocus:false,
      esActivateBlur:false,
      esActivateOninput:false,
      msgBlur:''
    }
  },
  methods:{
    blurEmit:function(){
      this.$emit('newBlur');
      console.log("Entra Flags");
      console.log(this.flagEvents);
      this.treatmentFlags();
    },
    focusEmit:function(){
      this.$emit('newFocus');
       this.treatmentFlags();
    },
    oninputEmit:function(){
      this.$emit('newOninput');
       this.treatmentFlags();
    },
    treatmentFlags:function(){
      this.esActivateFocus = this.flagEvents.esActivateFocus; 
      if(!(document.querySelector(`#${this.idElement} input`).value).length)
          this.esActivateBlur = this.flagEvents.esActivateBlur;
      else
      {
          console.log("UUUU");
          this.esActivateBlur = false;
      }

      this.esActivateOninput = this.flagEvents.esActivateOninput;
            console.log('esActivateFocus:' + this.esActivateFocus);
                        console.log('esActivateBlur:'+ this.esActivateBlur);

            console.log('esActivateOninput:' + this.esActivateOninput);


            console.log("Sale Flags");

    
    }
    
  }
 
}
</script>

