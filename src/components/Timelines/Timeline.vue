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
          v-for="(item, key) in items"
          :key="key"
          large
        >
          <template v-slot:icon>
            <v-avatar>
              <v-img
                :src="item.image"
                :title="getDescriptionImage(item)"
                :alt="getDescriptionImage(item)"
              ></v-img>
            </v-avatar>
          </template>
          <template v-slot:opposite>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              {{ getTitle(item) }}
            </v-card-title>
            <v-card-text>
              <p class="subtitle-2 font-weight-bold">
                {{ item | getStartedDateEndedDate }}
              </p>
              <p>
                {{ item.description }}
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
            v-for="(item, key) in items"
            :key="key"
            small
          >
            <template v-slot:icon>
              <v-avatar>
                <v-img
                  :src="item.image"
                  :title="getDescriptionImage(item)"
                  :alt="getDescriptionImage(item)"
                  class="elevation-4"
                ></v-img>
              </v-avatar>
            </template>
            <v-row class="pt-1">
              <v-col>
                <strong>
                  {{ getTitle(item) }}
                </strong>
                <div class="subtitle-2 font-weight-bold">
                  {{ item | getStartedDateEndedDate }}
                </div>
                <div class="subtitle-2">
                  {{ item.description }}
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
    name: 'Timeline',
    props: ['title', 'items'],
    data() {
      return {}
    },
    methods: {
      getTitle(item) {
        return item.name || item.title
      },
      getDescriptionImage(item) {
        return item.company || item.institution
      }
    }
  }
</script>