<template>
  <v-row>
    <v-col cols="12" md="12">
      <div class="headline content-title font-weight-bold">
        {{ title }}
      </div>
    </v-col>
    <v-col cols="12" md="3" xs="12" sm="12" v-for="(skill, index) in skills" :key="index">
      <v-card
        class="mx-auto"
      >
        <v-card-title>
          <p class="subtitle-2 font-weight-bold">
            <v-avatar>
              <v-img
                :src="skill.image"
                :title="skill.name"
                :alt="skill.name"
              ></v-img>
            </v-avatar>
            {{ skill.name }}
          </p>
        </v-card-title>
        <v-card-subtitle>
          <v-rating
            :value="skill.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            size="28"
            readonly
          ></v-rating>
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    name: 'ListSkills',
    props: ['title', 'skills']
  }
</script>