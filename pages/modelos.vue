<template>
  <v-row align="center">
    <v-col sm="12">
      <h1>Modelos</h1>
      <p>Condiciones generales: todas las casetas incluyen puerta con chapa de seguridad con juego de llaves, más un equipo eléctrico para conexión con red que contiene enchufe (1u), soquete (1u) y caja de distribución (1u)</p>
      <displayInfo />
    </v-col>
  </v-row>
</template>
<script>
import displayInfo from '@/components/displayInfo.vue'

export default {
  components: {
    displayInfo,
  },
}
</script>
<style lang="scss" scoped></style>
