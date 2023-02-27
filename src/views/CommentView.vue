<template>
    <v-container>
      <add-comment></add-comment>
      <v-row>
        <v-col md="6" sm="12" lg="4" v-for="comment in comments" :key="comment.id">
          <comment-list
          :comment="comment"
          :user="comment.user"
          >
          </comment-list>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  import { mapActions,mapGetters } from "vuex";
  import CommentList from '@/components/Comment/CommentList.vue';
  import AddComment from "@/components/Comment/AddComment.vue";
    
    export default {
      name: 'CommentView',
  
      components: {
        AddComment,
        CommentList,
      },
      computed:{
        ...mapGetters({
          comments: "commentlist/getComments",
        })
      },
      mounted(){
        this.fetchComments();
      },
      methods: {
        ...mapActions({
          setComments : "commentlist/setComments",
        }),
        fetchComments(){
        const commentUrl= 'https://dummyjson.com/comments';
        axios.get(commentUrl)
          .then(response => {
            if(response.status === 200) {
              this.setComments({comments: response.data.comments})
            }else console.log(response)
          })
          .catch(err => console.log(err))
      }
      },
      
      
    }
  </script>
  