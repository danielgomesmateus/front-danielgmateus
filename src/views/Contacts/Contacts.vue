<template>
  <v-app>
    <v-container>
      <contact :title="title" />
    </v-container>
  </v-app>
</template>

<script>
  import Contact from '../../components/Forms/Contact'

  export default {
    components: {
      'contact': Contact
    },
    data() {
      return {
        title: 'Entre em contato'
      }
    }
  }
</script>