import { createRouter, createWebHistory } from 'vue-router'
import { LayoutHome } from '@layouts'
import { Home, Historial, Inventario, Equipo, Login, Registro } from '@pages'

import { user } from '@fb'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: LayoutHome,
			children: [
				{
					path: '/',
					alias: ['/home', 'inicio', 'casa'],
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

router.beforeEach(async (to, from, next) => {
	async function authtenticacion() {
		setTimeout(() => {
			console.log('user : ' + Boolean(user))

			if (user && from.fullPath == '/login') {
				router.push('/')
			}

			if (!user && to.fullPath !== '/registro') {
				router.push('/login')
			}
		}, 10)
	}

	await authtenticacion()
	return next()
})

export default router
