<template>
  <v-row>
    <v-col cols="12" md="12">
      <div class="headline content-title font-weight-bold">
        {{ title }}
      </div>
    </v-col>
    <v-col cols="12" md="8" offset-md="2" class="hidden-sm-and-down">
      <v-timeline>
        <v-timeline-item
          v-for="(experience, key) in experiences"
          :key="key"
          large
        >
          <template v-slot:icon>
            <v-avatar>
              <v-img
                :src="experience.image"
                :title="experience.company"
                :alt="experience.company"
              ></v-img>
            </v-avatar>
          </template>
          <template v-slot:opposite>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              {{ experience.title }}
            </v-card-title>
            <v-card-text>
              <p class="subtitle-2 font-weight-bold">
                {{ experience | getStartedDateEndedDate }}
              </p>
              <p>
                {{ experience.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
    
    <v-col cols="12" md="12" class="hidden-md-and-up">
      <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            v-for="(experience, key) in experiences"
            :key="key"
            small
          >
            <template v-slot:icon>
              <v-avatar>
                <v-img
                  :src="experience.image"
                  :title="experience.company"
                  :alt="experience.company"
                  class="elevation-4"
                ></v-img>
              </v-avatar>
            </template>
            <v-row class="pt-1">
              <v-col>
                <strong>
                  {{ experience.title }}
                </strong>
                <div class="subtitle-2 font-weight-bold">
                  {{ experience | getStartedDateEndedDate }}
                </div>
                <div class="subtitle-2">
                  {{ experience.description }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
    </v-col>
  </v-row>
</template>
<script>
    export default {
      name: 'ListExperiences',
      props: ['title', 'experiences']
    }
</script>