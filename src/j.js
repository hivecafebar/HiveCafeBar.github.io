import './assets/j.css'

import { createApp } from 'vue'
import j from './j.vue'
import Router from './j/router'

const HIVE = createApp(j)
HIVE.use(Router)
HIVE.mount('#j')
