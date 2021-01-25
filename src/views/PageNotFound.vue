<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" v-if="alert.value">
        <alert :alert="alert" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import DefaultAlert from '../components/Alerts/Default'

  export default {
    components: {
      'alert': DefaultAlert
    },
    data() {
      return {
        alert: {
          value: true,
          message: '404 - Página não encontrada.',
          type: 'error'
        }
      }
    }
  }
</script>
