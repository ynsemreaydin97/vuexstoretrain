<template>
    <div>
      <v-container>
        <h1 class="text-center mb-4" style="font-size: 100px; font-family: AppleGothic;"> API PROJECT</h1>
          <v-row
              align="center"
              justify="space-around"
          >
  
              <v-btn
                  class="white--text"
                  depressed
                  color="grey darken-3"
                  @click="$router.push({path: '/'})"
              >
                Products
              </v-btn>
              <v-btn
                  class="white--text"
                  depressed
                  color="grey darken-3"
                  @click="$router.push({path: '/CommentList'})"
              >
                Comments
              </v-btn>
              <v-btn
                  class="white--text"
                  depressed
                  color="grey darken-3"
                  @click="$router.push({path: '/PostList'})"
              >
                Posts
              </v-btn>
              <v-btn
                  class="white--text"
                  depressed
                  color="grey darken-3"
                  @click="$router.push({path: '/UserList'})"
              >
                Users
              </v-btn>  
          </v-row>
        <br>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderBar",
  }
  
  </script>
  
  <style scoped>
  
  </style>