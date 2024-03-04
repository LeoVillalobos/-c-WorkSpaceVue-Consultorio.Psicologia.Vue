/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { axiosConfig } from './plugins/axios';

const app = createApp(App)

axiosConfig();
registerPlugins(app)

app.mount('#app')
