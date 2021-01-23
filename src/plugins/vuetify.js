import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import minifyTheme from 'minify-css-string'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#212121',
        info: '#187888',
        anchor: '#FFF'
      },
    },
    dark: false,
    options: { minifyTheme },
  },
});
