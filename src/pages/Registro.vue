<script setup>
import { ref } from 'vue'
async function ingresar(credenciales) {
	console.log(credenciales.email, credenciales.pass)
}
const credenciales = ref({})
</script>

<template>
	<section>
		<h2>Registro</h2>
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
				placeholder="***********"
			/>
			<input
				required
				type="password"
				v-model="credenciales.pass"
				name="pass"
				id="contraseña"
				placeholder="***********"
			/>
			<button type="submit">Solicitar</button>
			<div>
				<p>¿Ya tienes una cuenta?</p>
				<RouterLink to="/login">Inicia seción</RouterLink>
			</div>
		</form>
	</section>
</template>
<style scoped>
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
