<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="display-1 text-center">
            Experiências
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
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
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
      data() {
        return {}
      },
      computed: {
        ...mapGetters({
          getSkillsGetter: 'experience/getExperiences'
        }),
        experiences() {
          return this.getSkillsGetter.results
        }
      }
    }
</script>