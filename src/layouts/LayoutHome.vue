<template>
	<nav>
		<RouterLink to="/">Inicio</RouterLink>

		<RouterLink to="/historial">Historial </RouterLink>

		<RouterLink to="/inventario">Inventario</RouterLink>

		<RouterLink to="/equipo/1">Equipo/{id}</RouterLink>
		<RouterLink to="/login">Iniciar sesión</RouterLink>
	</nav>
	<router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue'
import { querys } from '@fb'
const buscar = querys.buscarDocumentos

onMounted(() => {
	buscar('historial')
		.then((result) => {
			console.log(result)
		})
		.catch((err) => {
			console.error(err)
		})
})
</script>
<style scoped>
nav {
	display: flex;
	gap: 2rem;
}
</style>
