import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import minifyTheme from 'minify-css-string'

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: ['~/src/sass/variables.scss'],
  treeShake: true,
  theme: {
    themes: {
      light: {
        primary: '#212121',
        info: '#187888',
        anchor: '#187888'
      },
    },
    dark: false,
    options: { minifyTheme },
  },
});
