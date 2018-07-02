<template>
  <div>
    <h1> {{ title }}</h1>

    <ul>
      <li v-for="photo of photos">
        <img :src="photo.url" :alt="photo.title">

      </li>

    </ul>

    
  </div>
</template>

<script>
export default {
  
  data () {
    
    return {
      title: 'Brangi Pics',
      photos: [
        {
          url: 'https://d4rkb12ivmqp2.cloudfront.net/images/pets/big/prairie-dog.v7384.jpg',
          title: 'Dog'
        },
        {
          url: 'https://d4rkb12ivmqp2.cloudfront.net/images/pets/big/prairie-dog.v7384.jpg',
          title: 'Snoop Dog'
        }
      ]
    }
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
</style>
