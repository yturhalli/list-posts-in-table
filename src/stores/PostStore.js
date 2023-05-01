import { defineStore } from "pinia";
import axios from "axios"

// Create store for posts
export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: []
    }),
    actions: {
        async fetchPosts() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.posts = res.data
        }
    }
})