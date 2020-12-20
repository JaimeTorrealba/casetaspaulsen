<template>
  <div class="text-center">

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Mensaje de Confirmacion
        </v-card-title>

        <v-card-text>
            Su cotizacion se ha realizado con exito, nos contactaremos con usted lo antes posible
        </v-card-text>

        <v-divider></v-divider>
              <v-card-actions>
          <v-spacer></v-spacer>
            <slot />
        </v-card-actions>

      </v-card>

  </div>
</template>

