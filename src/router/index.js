import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/historial',
			component: Home,
		},
		{
			path: '/inventario',
			component: Home,
		},
		{
			path: '/equipo/:id',
			component: Home,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

export default router
