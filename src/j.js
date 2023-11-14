import './assets/styles/j.less'

import { createApp } from 'vue'
import j from './j.vue'
import Anna from './j/Anna'

const NECjAR = createApp(j)
NECjAR.use(Anna)
NECjAR.mount('#⡸')
