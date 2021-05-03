<template>
  <v-app>
    <template>
      <div>
        <v-app-bar color="blue-grey" dense dark>
          <img
            src="logo.png"
            alt="Logo empresas Paulsen"
            class="logo"
          />
          <v-spacer></v-spacer>

          <nuxt-link to="/">Home</nuxt-link>
          <span v-for="link in links" :key="link">
            <nuxt-link :to="link" class="ml-3"> {{ link }} </nuxt-link>
          </span>
        </v-app-bar>
      </div>
    </template>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer padless color="blue-grey" dark>
      <v-col class="text-center" cols="12" >
        {{ new Date().getFullYear() }} — <strong>Paulsen Seguridad &copy;</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js',
      links: ['Condiciones', 'Otros servicios', 'Contactanos'],
    }
  },
}
</script>
<style lang="css" scoped>
a {
  color: white;
  text-decoration: none;
}
.logo {
  width: 10%;
  height: auto;
}
</style>
