<template>
    <v-toolbar class="primary box-header" app>
      <v-spacer></v-spacer>
      <v-menu
        offset-y
        :nudge-width="300"
        :open-on-hover="true"
        class="hidden-xs-only menu-avatar">
        <v-avatar size="36px" slot="activator">
          <img :src="user.avatar_url" alt="">
        </v-avatar>
        <v-card class="card-menu-avatar">
          <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar class="height-img-menu">
              <img :src="user.avatar_url" class="height-img-menu">
            </v-list-tile-avatar>
            <v-list-tile-content id="content-menu-avatar">
              <v-list-tile-title>{{user.name}}</v-list-tile-title>
              <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile avatar>
        </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
</template>

<script src="./header.js"></script>
<style src="./header.css"></style>
