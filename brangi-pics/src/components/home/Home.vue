<template>
  <div>
    <h1> {{ title }}</h1>

    <input type="search" placeholder="Find by title" v-on:input="filter = $event.target.value">

    <ul class="inline-block">
      <li v-for="photo of photosFiltered">
         <panel :title="photo.titulo">
            <responsive-img :url="photo.url" :title="photo.titulo"/>
        </panel>

      </li>
    </ul>
    
  </div>
</template>

<script>

import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/image/ResponsiveImage.vue';

export default {

  components: {
    'panel': Panel,
    'responsive-img': ResponsiveImage
  },
  
  data () {
    return {
      title: 'Brangi Pics',
      photos: [],
      filter: ''
    }
  },
  computed: {

    photosFiltered() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');

        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
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

.inline-block {
  display: inline-block;
}

</style>
