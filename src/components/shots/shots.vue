<template lang="html">
  <v-flex>
    <v-layout row wrap id="container-shots">
      <v-flex lg12 md12 sm12 xs12 >
        <h1 id="title-contaiter-shots">Shots{{favorites ? '- Favorites': ''}}</h1>
      </v-flex>
      <v-flex
        v-for="shot in filterShotes"
        :key="shot.id"
        v-bind="{ [`sm${sizeGrid.size}`]: true }" xs12>
      <v-card class="ma-4" >
        <v-card-media
                v-on:mouseenter="setIdShowText(shot.id)"
                v-on:mouseleave="setFalseIdShowText()"
                :src="shot.images.hidpi"
                :height="sizeGrid.height"
              >
          <v-container fill-height fluid class="transition-title" v-if="checkIdShowText(shot.id)">
            <v-layout row wrap fill-height class="box-description">
              <v-flex xs12 sm12 md12 align-end flexbox>
                <span class="white--text shadow-title" v-text="shot.title"></span>
                <div v-html="shot.description"></div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-actions class="white">
          <v-spacer></v-spacer>
          <div>
            <span class="font-number-icon">{{shot.views_count}}</span>
            <v-icon small class="font-icon-shot" color="grey lighten-1" >remove_red_eye</v-icon>
          </div>
          <div>
            <span class="font-number-icon">{{shot.comments_count}}</span>
            <v-icon small class="font-icon-shot" color="grey lighten-1" >forum</v-icon>
          </div>
          <div>
            <span class="font-number-icon">{{shot.likes_count}}</span>
            <v-icon small class="font-icon-shot" color="grey lighten-1" >favorite</v-icon>
          </div>
        </v-card-actions>
      </v-card>
     </v-flex>
   </v-layout>
   <v-layout row justify-center>
     <v-flex sm4 lg4 md4 >
       <v-layout row justify-center>
         <v-progress-circular v-if="loader" indeterminate color="primary"></v-progress-circular>
       </v-layout>
     </v-flex>
   </v-layout>
  </v-flex>
</template>

<script src="./shots.js"></script>
<style src="./shots.css"></style>
