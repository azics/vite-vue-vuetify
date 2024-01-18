import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Vuetify)

app.mount('#app')