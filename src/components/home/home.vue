<template>
  <v-layout row wrap id="content-bar-header">
    <v-layout justify-center row id="bar-header">
      <v-spacer></v-spacer>
      <v-flex sm6 lg4 md6 xs10>
        <v-text-field
              label="Search..."
              single-line
              prepend-icon="search"
              v-model="search"
          ></v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn small slot="activator" id="btn-favorite" v-on:click="setFavorite()" icon>
            <v-icon :color="colorFavorite">favorite</v-icon>
        </v-btn>
         <span>Favorites Shots</span>
      </v-tooltip>
      <v-menu
        offset-y
        :nudge-width="120"
        :open-on-hover="true"
        max-height="50" class="hidden-xs-only menu-size-grid">
        <v-btn icon slot="activator">
          <v-icon >burst_mode</v-icon>
        </v-btn>
        <v-card class="primary">
          <v-layout row>
            <v-flex>
              <v-btn class="secondary" v-on:click="setSizeGrid('small')" icon>
                <v-icon >view_comfy</v-icon>
              </v-btn>
              <v-btn class="secondary" v-on:click="setSizeGrid('medium')" icon>
                <v-icon >apps</v-icon>
              </v-btn>
              <v-btn class="secondary" v-on:click="setSizeGrid('large')" icon>
                <v-icon >dashboard</v-icon>
              </v-btn>
              <v-btn class="secondary" v-on:click="setSizeGrid('x-large')" icon>
                <v-icon >stop</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-menu>
    </v-layout>
    <shots :search="search" :sizeGrid="size" :favorites="favorite"></shots>
  </v-layout>
</template>

<script src="./home.js"></script>
<style src="./home.css"></style>
