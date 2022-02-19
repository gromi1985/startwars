<template>
  <div :id="idElement" class="elementItem">
    <label>
      <span v-show="!(esActivateFocus || esActivateOninput) && esActivateBlur"> {{headTitle}} </span>
      <input
        id="firstName"
        type="text"
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
           v-if="esActivateBlur || esActivateOninput">{{msgBlur}}</span>

  </div>
</template>

<script>
export default {
  name: "InputElement",
  props:['idElement','headTitle','flagEvents','tipo'],
  data(){
    return{
      esActivateFocus:false,
      esActivateBlur:false,
      esActivateOninput:false,
      cadena:'',
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
      this.cadena=document.querySelector(`#${this.idElement} input`).value;
      this.treatmentFlags();
      this.validateFields(this.tipo);
    },
    treatmentFlags:function(){
      this.msgBlur='Please enter your ' + `${this.headTitle}`
      this.esActivateFocus = this.flagEvents.esActivateFocus; 
      if(!this.cadena.length){
          this.esActivateBlur = this.flagEvents.esActivateBlur;
      }
      else
          this.esActivateBlur = false;

      this.esActivateOninput = this.flagEvents.esActivateOninput;
            console.log('esActivateFocus:' + this.esActivateFocus);
            console.log('esActivateBlur:'+ this.esActivateBlur);

            console.log('esActivateOninput:' + this.esActivateOninput);
    
    },
    emailValidatePattern()
    {
         console.log('emailValidatePattern');

         let tuEmail = this.cadena.toString()
         const patron = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/
         let respuesta = patron.test(tuEmail)
         return respuesta;
    },
    validateFields(){
      console.log('validateFields:'+ this.tipo, typeof this.tipo);
      switch (this.tipo){
        case '2':
          if(!this.emailValidatePattern())
            console.log('yeeeee');
             this.msgBlur="Please enter a valid email address."
          break;
        default: 
       }
     }
    }
    
  }

</script>

