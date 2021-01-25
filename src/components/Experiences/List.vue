<template>
  <v-app>
    <v-container>
      <timeline :title="title" :items="experiences" />
    </v-container>
  </v-app>
</template>
<script>
  import Timeline from '../Timelines/Timeline'

  export default {
    name: 'ListExperiences',
    components: {
      'timeline': Timeline
    },
    props: ['title', 'experiences']
  }
</script>