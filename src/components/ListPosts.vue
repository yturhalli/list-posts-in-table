<template lang="pug">
div
    div(class="container mt-5")
        table(class="table")
            thead
                tr
                    th(scope="col" class="fw-bold") User Id
                    th(scope="col" class="fw-bold") Id
                    th(scope="col" class="fw-bold") Title
                    th(scope="col" class="fw-bold") Body
            tbody(v-for="(post, index) in postStore.posts" :key="index")
                tr
                    th(scope="row") {{ post.userId }}
                    th {{ post.id }}
                    th {{ post.title }}
                    th {{ post.body }}
</template>

<script>
import { usePostStore } from "../stores/PostStore";
export default {
  name: 'ListPosts',
  setup() {
    const postStore = usePostStore();

    postStore.fetchPosts();

    return { postStore };
  },
};
</script>

<style scoped>
th {
    font-weight: 300;
}
</style>