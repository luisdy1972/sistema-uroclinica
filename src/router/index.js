import { createRouter, createWebHistory } from 'vue-router'

import { LayoutHome } from '@layouts'
import { Home, Historial, Inventario, Equipo, Login, Registro } from '@pages'

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
					component: Inventario,
				},
				{
					path: '/equipo/:id',
					component: Equipo,
				},
			],
		},

		{
			path: '/login',
			component: Login,
		},

		{
			path: '/registro',
			component: Registro,
		},
	],

	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

export default router
