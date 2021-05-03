<template>
  <div >
    <h1 class="text-center my-5">Contactate con nosotros</h1>
    <v-form ref="form">
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            prepend-icon="mdi-account "
            outlined
            label="Primer Nombre *"
            :rules="nameRule"
          />
          <v-text-field
            v-model="lastName"
            prepend-icon="mdi-account"
            outlined
            label="Primer Apellido *"
            :rules="nameRule"
          />
          <v-text-field
            v-model="email"
            prepend-icon="mdi-phone"
            outlined
            label="Email *"
            :rules="emailRule"
          />
          <v-text-field
            v-model="tlf"
            prepend-icon="mdi-email"
            outlined
            label="Telefono *"
            :rules="tlfRule"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="company"
            prepend-icon="mdi-office-building-outline"
            outlined
            label="Empresa (opcional)"
          />

          <v-select
            prepend-icon="mdi-map-marker"
            outlined
            label="Region* "
            :items="region"
            v-model="regionSelected"
            :rules="required"
          ></v-select>

          <v-select
            v-model="communeSelected"
            prepend-icon="mdi-map-marker"
            outlined
            label="Comuna* "
            :items="communeSelectable"
            :rules="required"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="6" >
          <v-combobox
            v-model="modelSelected"
            :items="models"
            :rules="required"
            outlined
            chips
            label="Selecciona el/los Modelos a cotizar"
            multiple
          ></v-combobox>
          <v-textarea
            solo
            v-model="msg"
            name="Note"
            label="Informacion adicional.."
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="6">
          <div class="d-flex justify-space-between">
            <v-btn color="success" @click="submit"> Enviar Cotizacion </v-btn>
            <v-btn color="error" @click="reset"> Borrar Formulario </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>

    <!-- Modal -->
    <v-dialog v-model="dialog" width="500">
      <modal>
        <v-btn color="primary" text @click="dialog = false"> Entendido </v-btn>
      </modal>
    </v-dialog>
  </div>
</template>
<script>
import { regionYcomuna } from '../store/region.js'
import modal from '../components/dialog'
export default {
  components: {
    modal,
  },
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      tlf: '',
      company: '',
      msg: '',
      regionSelected: '',
      communeSelected: '',
      modelSelected: '',
      models: ['modelo1', 'modelo2', 'modelo3', 'modelo4'],
      region: [...regionYcomuna.region],
      dialog: false,
      nameRule: [
        (v) => !!v || 'Este campo Obligatorio',
        (v) => v.length >= 3 || 'Debe tener minimo 3 Letras',
      ],
      emailRule: [
        (v) => !!v || 'Este campo Obligatorio',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      tlfRule: [
        (v) => !!v || 'Este campo Obligatorio.',
        (v) => /[0-9]/.test(v) || 'Solo 9 numeros',
      ],
      required: [(v) => !!v || 'Este campo Obligatorio'],
    }
  },
  computed: {
    // usa bind directamente
    communeSelectable: function () {
      const regions = [...regionYcomuna.region]
      const element = this.regionSelected
      let selectable = ['Seleccione una region primero']
      let indices = regions.findIndex(commune => commune === element)
      selectable = regionYcomuna.commune[indices]
      return selectable
    },
  },
  methods: {
    submit() {
       const vm = this
      if (this.$refs.form.validate()) {
        
        fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            name: this.name, 
            lastName: this.lastName, 
            tlf: this.tlf, 
            company: this.company, 
            region: this.regionSelected, 
            commune: this.communeSelected, 
            model: this.modelSelected, 
            email: this.email,
            msg: this.msg
            }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          if (res.ok) {
            res.text().then(function (data) {
              vm.dialog = true
            })
          }
        })
      }
    },
    reset() {
      ;(this.name = ''),
        (this.lastName = ''),
        (this.email = ''),
        (this.tlf = ''),
        (this.company = ''),
        (this.regionSelected = ''),
        (this.communeSelected = ''),
        (this.modelSelected = ''),
        this.$refs.form.resetValidation()
    },
  },
}
</script>
<style lang="css" scoped>
</style>
