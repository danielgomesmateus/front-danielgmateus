<template>
  <timeline :title="title" :items="academicFormations" />
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