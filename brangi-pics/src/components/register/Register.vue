<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ image.titulo }}</h2>

    <form @submit.prevent="save()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model="image.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="image.url">
        <imagem-responsiva v-show="image.url" :url="image.url" :title="image.titulo" />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="image.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao title="GRAVAR" type="submit" @btnActived="update(photo._id)"/>
        <router-link to="/"><meu-botao title="VOLTAR" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/image/ResponsiveImage.vue';
import Botao from '../shared/button/Button.vue';
import Image from '../../domains/Image';
import ImageService from '../../domains/ImageService';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  created() {
    this.service = new ImageService(this.$resource);
    this.id = this.$route.params.id;

    if(this.id) {
      this.service.find(this.id)
          .then((res) => this.image = res);
    }
  },

  data() {
      return {
          image: new Image()
      }
  },

  methods: {

      save() {
        this.service.save(this.image)
          .then(() => {
            if(this.id) this.$router.push({ name: 'home' });
            this.image = new Image();
          }, err => console.log(err));
      },

      delete() {
        this.service.delete(this.image.id)
          .then(() => console.log('removido'), err => console.log(err));
      },

      update() {
        this.service.save(this.image);
      }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>