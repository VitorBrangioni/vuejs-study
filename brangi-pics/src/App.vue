<template>
  <div>
    <h1> {{ title }}</h1>

    <ul class="inline-block">
      <li v-for="photo of photos">
         <panel :title="photo.titulo">
          <img class="img-responsive" :src="photo.url" :alt="photo.title">
        </panel>

      </li>
    </ul>
    
  </div>
</template>

<script>

import Panel from './components/shared/panel/Panel.vue';

export default {

  components: {
    'panel': Panel
  },
  
  data () {
    
    return {
      title: 'Brangi Pics',
      photos: []
    }
  },
  created() { // lifecycle hooks
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.img-responsive {
  width: 100%;
}

.inline-block {
  display: inline-block;
}

</style>
