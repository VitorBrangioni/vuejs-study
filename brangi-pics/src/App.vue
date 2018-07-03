<template>
  <div>
    <meu-menu :routes="routes" />
    <router-view></router-view>
  </div>
</template>

<script>

import { routes } from './routes.js';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },

  data() {
    
    return {
      routes
    }
  }

  // passar para template

}

</script>

<style>

</style>
