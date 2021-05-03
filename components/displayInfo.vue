<template>
  <div>
    <h2>{{ titulo }}</h2>
    <v-simple-table dense>
      <template>
        <thead>
          <tr>
            <th class="text-left">Altura</th>
            <th class="text-left">Fondo</th>
            <th class="text-left">otro</th>
          </tr>
        </thead>
      </template>
    </v-simple-table>
    <v-row>
      <v-col> <h3>Descripcion</h3>  </v-col>
    </v-row>
  </div>
</template>
<script>
export default {}
</script>
<style lang="css" scoped></style>
