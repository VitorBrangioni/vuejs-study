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
        <meu-botao title="GRAVAR" type="submit"/>
        <router-link to="/"><meu-botao title="VOLTAR" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/image/ResponsiveImage.vue';
import Botao from '../shared/button/Button.vue';
import Image from '../../domains/Image';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data() {
      return {
          image: new Image()
      }
  },

  methods: {

      save() {
        // 1) enviar dados para API
        console.log("saving..");
        console.log(this.image.titulo);
        console.log(this.image.url);
        console.log(this.image.descricao);
        console.log(this.image);
        
        this.$http
            .post('http://localhost:3000/v1/fotos', this.image)
            .then(() => this.image = new Image(), err => console.log(err));
            


        // 2) limpar dados do form
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