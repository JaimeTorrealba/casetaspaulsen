<template>
<div class="text-center">
  <h1>Mas servicios</h1>
  <v-row>
<v-col sm="6">
 <cardService 
 title="PAULSEN TRANSPORTES S.A."
 description="Sus instalaciones permiten, además, todas las actividades relacionadas con Selección, Reclutamiento, Capacitación y Re-entrenamiento de su personal, en las áreas prácticas y teóricas."
  />
</v-col >
<v-col sm="6">
 <cardService 
 title="PAULSEN SEGURIDAD S.A"
 description="Empresa de Transportes, con experiencia Nacional e Internacional, con un know-how actualizado y medios técnicos de última generación, saluda a usted y tiene el agrado de hacer llegar a usted carta de presentación de nuestros servicios de Transportes de Cargas Valoradas para mercaderías de Alta Gama, y asistencia en ruta con móviles y escoltas profesionales en la Región Metropolitana y a cualquier punto del país."
 />
</v-col>
  </v-row>
  </div>
</template>
<script>
import cardService from '@/components/cardService.vue'
export default {
  components:{
    cardService,
  },

  data() {
    return {}
  },
}
</script>
<style lang="css" scoped></style>
