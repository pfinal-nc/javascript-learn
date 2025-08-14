import { createApp } from 'vue'
/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind.css'
import './style.css'
/** 引入uno.css，不引入不生效 */
import 'uno.css'
import App from './App.vue'

createApp(App).mount('#app')
