<template>
  <div>
    <b-button class="custom-button-style">
      <b-icon icon="plus" style="width:25px;height:25px"  ></b-icon>
    </b-button>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'quick-add-dropdown',
  components:{
    
  }
 
}
</script>
<style  scoped>
  .custom-button-style{
    background-color: transparent;
    border: none;
    padding:2px;
    margin-top: 1px;
  }
  .custom-button-style:hover{
    background-color: transparent;
    background-color: #e56d64 ;
  }
  .custom-button-style:focus{
    border-color: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #e56d64;
}
</style>