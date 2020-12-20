<template>
  <v-row align="center">
    <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
      <v-item
        v-for="(n, index) in modelos"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            color="indigo"
            @click="toggle"
            outlined
            class="my-1"
          >
            {{ n.title }}
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window v-model="window" class="elevation-1" vertical>
        <v-window-item v-for="(n, index) in modelos" :key="index">
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Alto</th>
                  <th class="text-left">Frente</th>
                  <th class="text-left">Fondo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ n.title }}</td>
                  <td>{{ n.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="mt-5 mx-auto">
          <img :src="n.src" alt="n.title" class="image-casetas">
          <p>{{n.description}}</p>
          </div>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'displayInfo',
  components: {},
  data() {
    return {
      window: 0,
      modelos: [
        { title: 'Caseta 1', description: 'descripcion 1', src: 'img/v.png' },
        { title: 'Caseta 12', description: 'descripcion 2', src: 'img/v.png' },
        { title: 'Caseta 123', description: 'descripcion 3', src: 'img/v.png' },
      ],
    }
  },
}
</script>
<style lang="css" scoped>
.image-casetas {
  float: left;
}
</style>
