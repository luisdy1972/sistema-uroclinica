<template>
	<nav>
		<RouterLink to="/">Inicio</RouterLink>

		<RouterLink to="/historial">Historial </RouterLink>

		<RouterLink to="/inventario">Inventario</RouterLink>

		<RouterLink to="/equipo/1">Equipo/{id}</RouterLink>
	</nav>
	<router-view></router-view>
</template>
<script setup></script>
<style scoped>
nav {
	display: flex;
	gap: 2rem;
}
</style>
