import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        colors: {
          background: '#f9fafb', // background color
          header_bg: '#3b82f6', // background color
          text: '#111827', // text color
          text_muted: '#6b7280', // muted text color
          primary: '#3b82f6', // primary color
          primary_hover: '#2563eb', // secondary color
          accent: '#10b981', // accent color
          border: '#e5e7eb', // border color
          card_bg: '#ffffff', // card background color
        },
      },
      dark: {
        colors: {
          background: '#111827', // background color for dark theme
          header_bg: '#111827', // background color for dark theme  
          primary: '#3b82f6', // primary color for dark theme
          primary_hover: '#60A5FA', // hover color for primary in dark theme
          text: '#f9fafb', // text color for dark theme
          text_muted: '#9ca3af', // muted text color for dark theme
          accent: '#34D399', // accent color for dark theme
          border: '#1F2937', // border color for dark theme
          card_bg: '#1E293B', // card background color for dark theme
        },
      },
    },
  },
})


app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
