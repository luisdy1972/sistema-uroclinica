<template>
	<nav>
		<RouterLink to="/">Inicio</RouterLink>
		<RouterLink to="/historial">Historial </RouterLink>
		<RouterLink to="/inventario">Inventario</RouterLink>
		<RouterLink to="/equipo/1">Equipo/{id}</RouterLink>
		<RouterLink to="/registro">Solicitar usuario</RouterLink>
		<a @click="salir">Cerrar sesión</a>
	</nav>
	<div class="container">
		<router-view></router-view>
	</div>
</template>
<script setup>
// import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { cerrarSesion } from '@fb'

const router = useRouter()

async function salir() {
	await cerrarSesion()
		.then(() => {
			console.log('Sesión cerrada')
			router.push('/login')
		})
		.catch((err) => {
			console.error(err)
		})
}

// onMounted(() => {})
</script>
<style scoped>
a {
	cursor: pointer;
}

.container {
	min-width: 90vw;
}
nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}
</style>
