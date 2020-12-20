<template>
  <v-card class="mx-auto mt-5" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> {{title}} </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
    <v-expand-transition>
      <div>
        <v-divider></v-divider>
        <v-card-text>
       {{description}}
        </v-card-text>
      </div>
    </v-expand-transition>
    <a href=""> <v-btn block>Ver mas...</v-btn> </a>
  </v-card>
</template>
<script>
export default {
  name: 'cardService',
  props: {
    title: String,
    subTitle: String,
    href: String,
    description: String,
    img: String,
  },
}
</script>
<style lang="css" scoped>
a {
  text-decoration: none;
}

</style>
