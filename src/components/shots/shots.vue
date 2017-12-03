<template lang="html">
  <v-layout row wrap>
    {{montarDados()}}
    <v-flex v-bind="{ [`xs${card.flex}`]: true }"
      v-for="card in filter"
      :key="card.title">
    <v-card>
      <v-card-media
              :src="card.src"
              height="200px"
            >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline white--text" v-text="card.title"></span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
   </v-flex>
  </v-layout>
</template>

<script src="./shots.js"></script>
<style src="./shots.css"></style>
