import { createRouter, createWebHistory } from 'vue-router'

import { LayoutHome } from '../layouts'
import { Home, Historial } from '../pages'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: LayoutHome,
			children: [
				{
					path: '/',
					component: Home,
				},

				{
					path: '/historial',
					component: Historial,
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
		},
	],

	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

export default router
