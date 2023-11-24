<template>
	<nav>
		<RouterLink to="/">Inicio</RouterLink>
		<RouterLink to="/historial">Historial </RouterLink>
		<RouterLink to="/inventario">Inventario</RouterLink>
		<RouterLink to="/equipo/1">Equipo/{id}</RouterLink>
		<RouterLink to="/login">Iniciar sesión</RouterLink>
		<a @click="salir">Cerrar sesión</a>
	</nav>
	<router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue'

import { cerrarSesion } from '@fb'
import router from '@router'

async function salir() {
	await cerrarSesion()
		.then(() => {
			console.log('Sesión cerrada')
			router.push('/')
		})
		.catch((err) => {
			console.error(err)
		})
}

onMounted(() => {
	// buscar('historial')
	// 	.then((result) => {
	// 		console.log(result)
	// 	})
	// 	.catch((err) => {
	// 		console.error(err)
	// 	})
})
</script>
<style scoped>
a {
	cursor: pointer;
}
nav {
	display: flex;
	gap: 2rem;
}
</style>
