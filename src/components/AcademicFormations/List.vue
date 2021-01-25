<template>
  <v-app>
    <v-container>
      <timeline :title="title" :items="academicFormations" />
    </v-container>
  </v-app>
</template>
<script>
  import Timeline from '../../components/Timelines/Timeline'
  
  export default {
    name: 'ListAcademicFormations',
    components: {
      'timeline': Timeline
    },
    props: ['title', 'academicFormations']
  }
</script>