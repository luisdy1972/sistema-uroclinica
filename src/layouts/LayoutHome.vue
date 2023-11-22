<template>
	<RouterLink to="/">Inicio</RouterLink>

	<RouterLink to="/historial">Historial </RouterLink>

	<RouterLink to="/inventario">Inventario</RouterLink>

	<RouterLink to="/equipo/1">Equipo/{id}</RouterLink>

	<router-view></router-view>
</template>
<script setup></script>
<style scoped>
a {
	padding: 1rem;
}
</style>
