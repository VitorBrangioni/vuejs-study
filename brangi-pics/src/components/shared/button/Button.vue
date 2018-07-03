<template>

<button :type="type" class="btn btn-danger"> {{ title }} </button>

    
</template>

<script>

export default {
    props: ['type', 'title']
}
    
</script>

<style>

    .btn {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .btn-danger {
        background-color: firebrick;
        color: white;
    }
    
</style>