<template>
  <div>
    <h1> {{ title }}</h1>

    <input type="search" placeholder="Find by title" v-on:input="filter = $event.target.value">

    <ul class="inline-block">
      <li v-for="photo of photosFiltered">
         <panel :title="photo.titulo" v-transform.animate>
            <responsive-img :url="photo.url" :title="photo.titulo"/>
            <h2>{{ photo.titulo }}</h2>
            <btn type="button" title="Remover" :confirmation="true" @btnActived="remove(photo)" />

            <router-link :to="{ name: 'update', params: { id: photo._id } }">
              <btn type="button" title="Alterar" :confirmation="false" />
            </router-link>
        </panel>

      </li>
    </ul>
    
  </div>
</template>

<script>

import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/image/ResponsiveImage.vue';
import Button from '../shared/button/Button';
import ImageService from '../../domains/ImageService.js';

import Transform from '../../directives/Transform.js';

export default {

  components: {
    'panel': Panel,
    'responsive-img': ResponsiveImage,
    'btn': Button
  },
  directives: {
    'transform': Transform
  },
  
  data () {
    return {
      title: 'Brangi Pics',
      photos: [],
      filter: ''
    }
  },
  computed: { // usar quando sera usado dentro de uma propriedade html

    photosFiltered() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');

        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  },

  methods: {

    remove(photo) {
      this.service
        .delete(photo._id)
        .then(() => {
          let index = this.photos.indexOf(photo);
          this.photos.splice(index, 1);
        }, err => console.log(err));
    }

  },

  created() { // lifecycle hooks

    this.service = new ImageService(this.$resource);

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
