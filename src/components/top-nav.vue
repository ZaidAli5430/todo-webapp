<template>
  <b-container fluid="" class="top-nav p-0">
    <div id="inner-nav" class="d-flex justify-content-between pt-1 pb-1">
          <div id="left-section" class="d-flex w-50" >
            <b-row class="left ml-md-5 flex-grow-1 flex-md-grow-0" >
              <b-col class="pr-3 pr-md-3" cols="2" md="1">
                <menu-dropdown></menu-dropdown>
              </b-col>
              <b-col class="pl-2 pr-md-0 pl-md-3" cols="10" md="10">
                <search-bar></search-bar>
              </b-col>
            </b-row>
           </div>
           <div class="right-section w-25 d-flex justify-content-end">
             <b-row  class="mr-3 justify-content-end">
               <b-col class="pl-1 pr-1 pr-sm-2 pl-md-0 pr-md-3" cols-md="1">
                 <quickadd-dropdown></quickadd-dropdown>
                </b-col >
                <b-col class="pl-1 pr-1 pr-sm-2 pl-md-3 pr-md-3" cols-md='1'>
                  <notifications-dropdown></notifications-dropdown>
                </b-col >
                <b-col class="pl-1 pr-1 pr-sm-2 pl-md-3 pr-md-3" cols-md='1'>
                  <settings-dropdown></settings-dropdown>
                  
                </b-col>
             </b-row>
           </div>
    </div>
  </b-container>
  
</template>

<script>
// @ is an alias to /src
import menuDropdown from './util-components/menu-dropdown'
import searchBar from './util-components/search-bar'
import quickAdd from './util-components/quick-add-dropdown'
import notifications from './util-components/notification-dropdown'
import settings from './util-components/settings-drowdown'

export default {
  name: 'top-nav',
  components:{
    'menu-dropdown':menuDropdown,
    'search-bar':searchBar,
    'quickadd-dropdown':quickAdd,
    'notifications-dropdown':notifications,
    'settings-dropdown':settings
  }
 
}
</script>
<style  scoped>
    .top-nav{
        background:#c9433a;
        
      }
    @media screen and (min-width:768px){
    .left{
        flex:0 0 35em
      }
    }
    
    
</style>