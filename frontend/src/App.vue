<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="BookReader logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/BookReader-favicon.svg/50px-BookReader-favicon.svg.png"
          transition="scale-transition"
          width="50"
        />
        <v-toolbar-title size="large">Book Reader</v-toolbar-title>

        <v-btn href="#" text plain :ripple="false" to="/">
          <span class="mr-2">Home</span>
        </v-btn>

        <v-btn href="#" text plain :ripple="false" to="/books">
          <span class="mr-2">Books</span>
        </v-btn>

        <v-btn href="#" text plain :ripple="false" to="/about">
          <span class="mr-2">About</span>
        </v-btn>
      </div>
      <!-- <v-spacer></v-spacer>

      <v-btn href="#" text :ripple="false" to="/changelang">
        <span class="mr-2">Change lanuage</span>
        <v-icon>mdi-translate</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: function(){
    return {

    }
  },
};
</script>
