<template>
  <v-app>
    <v-app-bar
      color="green"
      class="flex-grow-0"
      app
      dark
    >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>Vite+Vue+Vuetify</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Intro', to: '/' },
          { title: 'Export File', to: '/export' },
          { title: 'Data Table', to: '/datatable' }
        ]
      };
    }
  };
</script>