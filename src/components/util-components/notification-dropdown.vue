<template>
  <div>
    <b-button class="custom-button-style">
      <b-icon icon="bell-fill" scale="1" ></b-icon>
    </b-button>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'notification-dropdown',
  components:{
    
  }
 
}
</script>
<style  scoped>
  .custom-button-style{
    background-color: transparent;
    border: none;
    padding:4px;
    margin-top: 2px;
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