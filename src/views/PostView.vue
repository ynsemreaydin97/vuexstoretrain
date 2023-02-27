<template>
    <v-container>
      <add-post></add-post>
      <v-row>
        <v-col md="6" sm="12" lg="4" v-for="post in posts" :key="post.id">
          <post-list
          :post="post"
          ></post-list>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import PostList from '@/components/Post/PostList.vue';
import AddPost from "@/components/Post/AddPost.vue";

    export default {
      name: 'PostView',
  
      components: {
        PostList,AddPost
      },
      computed:{
        ...mapGetters({
          posts : "postlist/getPosts",
        })
      },
      mounted(){
        this.fetchPosts();
      },
      methods : {
        ...mapActions({
          setPosts : "postlist/setPosts",
        }),
        fetchPosts(){
        const postUrl = 'https://dummyjson.com/posts';
        axios.get(postUrl)
          .then(response => {
            if(response.status === 200) {
              // console.log(response.data.posts)
              this.setPosts({posts: response.data.posts})
            } else console.log(response.data)
          })
          .catch(err => console.log(err)
          )
      } 
      },
      
      
    }
  </script>
  