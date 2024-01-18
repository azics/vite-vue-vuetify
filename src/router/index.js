import { createRouter, createWebHistory } from 'vue-router'
import DataTable from '../views/DataTable.vue'
import ExportFile from '../views/ExportFile.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorld },
//   { path: '/', redirect: '/export' }, // Redirect to export page by default
  { path: '/export', component: ExportFile },
  { path: '/datatable', component: DataTable }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router