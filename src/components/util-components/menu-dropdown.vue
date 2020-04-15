<template>
  <div>
     <b-button class="menu-button">
       <b-icon style="width:25px;height:25px" icon="justify" variant="light"></b-icon>
     </b-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'menu-dropdown',
 
}
</script>

<style scoped>
.menu-button{     /*For removing default color and border */
  background-color:transparent;
  border:none;
  margin-top:-1px;
  
}
.menu-button:hover{
  background-color: #e56d64;
}
.menu-button:focus{
   border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #e56d64;
}

</style>