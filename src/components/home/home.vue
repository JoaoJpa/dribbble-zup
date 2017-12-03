<template>
  <v-layout row wrap>
    <headerApp ></headerApp>
    <v-layout justify-center row id="bar-header">
      <v-flex sm4 lg4 md4>
        <v-text-field
              label="Search..."
              single-line
              prepend-icon="search"
          ></v-text-field>
      </v-flex>
    </v-layout>
    <v-container id="container-shots" grid-list-md>
      <shots :search="search"></shots>
    </v-container>
    <footerApp></footerApp>
  </v-layout>
</template>

<script src="./home.js"></script>
<style src="./home.css"></style>
