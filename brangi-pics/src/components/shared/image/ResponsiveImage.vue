<template>
    <img class="img-responsive" :src="url" :alt="title">
</template>

<script>

export default {
    props: ['url', 'title']
}
    
</script>

<style scoped>

    .img-responsive {
        width: 100%;
    }
    
</style>