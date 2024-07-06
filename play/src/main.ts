import { createApp } from 'vue'
import App from './App.vue'
import YuJunElement from 'yujun-element'

const app = createApp(App)
app.use(YuJunElement)
app.mount('#app')
