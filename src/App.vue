
<template lang="pug">
  #app
    ListPosts()
</template>

<script>
import ListPosts from './components/ListPosts.vue'
export default {
  name: 'App',
  components: {
    ListPosts
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
