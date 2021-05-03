<template>
  <div>
    <v-row justify="center" align="center">
      <v-col>
        <v-banner>
          <template>
            <h2 class="text-center text-h5">Venta y arriendo de</h2>
            <h3 class="text-center text-h3">Casetas de seguridad</h3>
            <div class="d-flex justify-center">
              <v-chip class="ma-2 my-5" color="red" text-color="white">
                Despacho gratuito en la region metropolitana
              </v-chip>
            </div>
          </template>
        </v-banner>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <casetas
          :path="casetas.path"
          :totalFrames="casetas.totalFrames"
          :endFrame="casetas.endFrame"
        />
      </v-col>
      <v-col>
        <displayInfo />
      </v-col>
    </v-row>
    <v-row justify="space-between my-5">
      <v-col class="d-flex justify-space-around">
        <v-btn depressed color="primary"> Caseta 1 </v-btn>
        <v-btn depressed color="primary"> Caseta 2 </v-btn>
        <v-btn depressed color="primary"> Caseta 3 </v-btn>
        <v-btn depressed color="primary"> Caseta 4 </v-btn>
        <v-btn depressed color="primary"> Caseta 5 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <clients />
      </v-col>
 <buttonCall /> 
    </v-row>
  </div>
</template>
<script>
import casetas from '../components/casetas'
import displayInfo from '../components/displayInfo'
import clients from '../components/clients'
import buttonCall from '../components/buttonCall'
export default {
  components: {
    casetas,
    displayInfo,
    clients,
    buttonCall
  },
  data() {
    return {
      casetas: {
        path: '/img/casetas03/',
        totalFrames: 59,
        endFrame: 59,
      },
    }
  },
}
</script>
<style lang="css" scoped></style>
