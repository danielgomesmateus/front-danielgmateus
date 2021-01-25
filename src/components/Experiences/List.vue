<template>
  <timeline :title="title" :items="experiences" />
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