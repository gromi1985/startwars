<template>
  <div :id="idElement" class="elementItem">
    <label>
      <span v-show="(!(esActivateFocus || esActivateOninput) && esActivateBlur) ||
                      (!esActivateFocus && !esActivateOninput ) "> {{headTitle}} </span>
      <input
        :type='definitionTypeField()'
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
      msgBlur:'',
      typeField: '',
    }
  },
  methods:{
    definitionTypeField() {
      switch (this.tipo) {
        case "1":
          this.typeField = "texto";
          break;
        case "2":
          this.typeField = "email";
          break;
        case "3":
          this.typeField = "password";
          break;
      }
      return  this.typeField ;
    },
    blurEmit:function(){
      this.$emit('newBlur');
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
      else{
          this.esActivateBlur = false;
          this.esActivateFocus = true;
      }

      this.esActivateOninput = this.flagEvents.esActivateOninput;
    
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
      switch (this.tipo){
        case '2':
          if(!this.emailValidatePattern())
             this.msgBlur="Please enter a valid email address."
          break;
        default: 
       }
     }
    }
    
  }

</script>

