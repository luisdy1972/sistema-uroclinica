import { createRouter, createWebHistory } from 'vue-router'
import { LayoutHome } from '@layouts'
import { Home, Historial, Inventario, Equipo, Login, Registro } from '@pages'

import { user } from '@fb'
// import { useLogin } from '@stores'

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
					meta: { login: true },
				},
				{
					path: '/historial',
					component: Historial,
					meta: { login: true },
				},
				{
					path: '/inventario',
					component: Inventario,
					meta: { login: true },
				},
				{
					path: '/equipo/:id',
					component: Equipo,
					meta: { login: true },
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
		{
			path: '/404',
			component: Registro,
		},
	],

	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

router.beforeEach((to, from, next) => {
	// if (to.matched.some((route) => route.meta.login)) {
	// 	if (!useLogin.sesion) {
	// 		router.push('/login')
	// 	}
	// }

	// async function authtenticacion() {
	// 	setTimeout(() => {
	// 		// console.log('user : ' + Boolean(user))
	// 		if (user && to.fullPath == '/login') {
	// 			router.push('/')
	// 		}
	// 		if (!user && to.fullPath !== '/registro') {
	// 			router.push('/login')
	// 		}
	// 	}, 200)
	// }
	// authtenticacion()

	return next()
})

export default router
