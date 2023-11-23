<script setup>
import { ref } from 'vue'
async function ingresar(credenciales) {
	console.log(credenciales.email, credenciales.pass)
}
const credenciales = ref({})
</script>

<template>
	<section>
		<h2>Login</h2>
		<form @submit.prevent="ingresar(credenciales)">
			<input
				required
				v-model="credenciales.email"
				type="email"
				name="email"
				id="Correo"
				placeholder="Correo electrónico"
			/>
			<input
				required
				type="password"
				v-model="credenciales.pass"
				name="pass"
				id="contraseña"
				placeholder="°°°°°°°°°°"
			/>
			<button type="submit">Entrar</button>
			<RouterLink to="/registro">Solicitar usuario</RouterLink>
		</form>
	</section>
</template>
<style scoped>
section {
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

input {
	height: 1.5rem;
	width: 125%;
	border-radius: 5px;
}
</style>
