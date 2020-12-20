<template>
  <v-row align-content="space-around" dense>
    <v-col v-for="(obj, index) in clients" :key="index" >
      <a :href="obj.href" target="_black" rel="norrefel">
        <img :src="obj.src" :alt="obj.alt" class="img-client mx-5"/>
      </a>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'clients',
  mounted() {
    this.fetchClients()
  },
data() {
    return {
        clients: null
    }
},
  methods: {
    fetchClients: function()  {
    const vm = this
    fetch('JSON/clientes.json')
      .then((res) => res.json())
      .then((datos) => {
         vm.clients = datos
      })
    },
  },
}
</script>
<style lang="css" scoped>
.img-client {
  width: 35px;
  height: auto;
  transition: transform 1s;
}
img:hover {
  transform: scale(1.5);
}
</style>
