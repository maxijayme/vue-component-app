import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(router)
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120,
        refetchOnReconnect: 'always'
      }
    }
  }
})

app.mount('#app')
