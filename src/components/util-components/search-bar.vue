<template>
  <div >
      <b-input-group style="margin-top:6px" size="sm">
         
            <div class="search-icon" 
            :style="backgroundColorObject">
               <b-icon scale="1"  :variant="iconColor" icon="search"></b-icon>
            </div>
             
          
          <b-form-input 
             @focus="isFocused=true"
             @blur="isFocused=false,
                    mouseleave()"
             @mouseover="mouseover()" 
             v-on="!isFocused ? {mouseleave}:{}"
             :style="backgroundColorObject"
             class="h-25 wd-100 " 
             style="border:none;" 
             type="search" 
             placeholder="Search">
            </b-form-input>
      </b-input-group>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'searchbar',
  data(){
    return{
      backgroundColorObject:{
        backgroundColor:'#d65c57'
      },
      iconColor:'light',
      isFocused:false
    }
  },
  methods:{
    mouseover(){
      this.backgroundColorObject.backgroundColor='white'
      this.iconColor='secondary'
    },
    mouseleave(){
      this.backgroundColorObject.backgroundColor='#d65c57'
      this.iconColor='light'
    }
  }
 
 
}
</script>
<style scoped>

.form-control:focus {   /*for removing default chrome highlight */
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.search-icon{
  background-color:#ffff;
  padding: 0 1px 0 4px; 
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
::placeholder{
  color: red;
}
</style>