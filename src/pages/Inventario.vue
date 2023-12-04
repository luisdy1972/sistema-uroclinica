<script setup>
import { ref } from 'vue'
const nuevoEquipo = ref({})
const modalNuevoEquipo = ref(false)
function abrirCerrarModal(modal) {
	!modalNuevoEquipo.value
		? (modalNuevoEquipo.value = true)
		: (modalNuevoEquipo.value = false)
}
</script>

<template>
	<!-- modal -->
	<dialog :open="modalNuevoEquipo">
		<button class="btn-close" @click="abrirCerrarModal()">Cerrar</button>
		<form @submit.prevent="">
			<!-- nuevo -->
			<div class="flex-colum">
				<h3>Nuevo Equipo</h3>
				<div class="flex-row">
					<div class="input-form">
						<label for="nombre">Nombre del equipo</label>
						<input type="text" id="nombre" required />
					</div>
					<div class="input-form">
						<label for="serial">Serial</label>
						<input type="text" id="serial" required />
					</div>
				</div>
				<div class="flex-row">
					<div class="input-form">
						<label for="areas">Area de operación</label>
						<select id="areas" required>
							<option value=""></option>
							<option :value="null">...</option>
						</select>
					</div>
					<div class="input-form">
						<label for="tipo-equipo">Tipo de equipo</label>
						<select id="tipo-equipo" required>
							<option value=""></option>
							<option :value="null">...</option>
						</select>
					</div>
				</div>
				<div class="input-form">
					<label for="empleado">Empleado responsable</label>
					<input type="text" id="empleado" required />
				</div>
			</div>
			<!-- caracteristicas -->
			<div class="flex-colum">
				<h4>Caracteristicas tecnicas</h4>

				<div class="flex-row">
					<div class="input-form">
						<label for="marcas">Marca del equipo</label>
						<select id="marcas" required>
							<option value=""></option>
							<option :value="null">...</option>
						</select>
					</div>

					<div class="input-form">
						<label for="modelo">Modelo</label>
						<input type="text" id="modelo" required />
					</div>
				</div>

				<div class="flex-row">
					<div class="input-form">
						<label for="procesador">Procesador</label>
						<input type="text" id="procesador" required />
					</div>
					<div class="input-form">
						<label for="memoria">Memoria RAM</label>
						<input type="number" id="memoria" required />
					</div>
				</div>
				<div class="flex-row">
					<div class="input-form">
						<label for="disco-duro">Almacenamiento (GB)</label>
						<input type="number" id="disco-duro" required />
					</div>
					<div class="input-form">
						<label for="tipo-disco">Tipo de disco</label>
						<select name="tipo-equipo" id="tipo-disco" required>
							<option value=""></option>
							<option :value="null">...</option>
						</select>
					</div>
				</div>
			</div>

			<!-- detalles compra -->
			<div class="flex-colum">
				<h4>Caracteristicas de compra</h4>
				<div class="input-form">
					<label for="proveedor">Proveedor</label>
					<input required type="text" id="proveedor" />
				</div>
				<div class="input-form">
					<label for="n-factura">Número de Factura</label>
					<input type="text" id="n-factura" required />
				</div>
				<div class="flex-row">
					<div class="input-form">
						<label for="fecha-compra">Fecha de compra: </label>
						<input required type="date" name="fecha-compra" id="fecha-compra" />
					</div>
					<div class="input-form">
						<label for="meses">Meses de garantía </label>
						<input type="number" id="meses" required placeholder="" />
					</div>
				</div>
			</div>

			<div class="flex-row container-btn">
				<button>Añadir</button>
				<button type="reset">Limpiar</button>
			</div>
		</form>
	</dialog>
	<section>
		<h2>Inventario</h2>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Nombre</th>
					<th>Area</th>
					<th>tipo</th>
					<th>Responsable</th>
					<th>Ver</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>👁</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<!-- <td></td>
					<td>Total equipos</td>
					<td>...</td>
					<td></td>
					<td></td> -->
				</tr>
			</tfoot>
		</table>
		<button @click="abrirCerrarModal()">Añadir</button>
	</section>
</template>
<style scoped>
table {
	width: 90vw;
}

td {
	padding: 0.5rem;
}

dialog {
	border: 0;
	top: 0;
	width: 90vw;
	background-color: rgba(36, 36, 36, 0.8);
	backdrop-filter: blur(3px);
}

.btn-close {
	position: fixed;
	margin-top: 5rem;
	top: 0;
	right: 0;
	background-color: transparent;
}

input,
select {
	padding: 0.3rem;
	border-radius: 10px;
}

.flex-colum {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
}

.flex-row {
	display: flex;
	justify-content: center;
	flex-direction: row;
	gap: 0.5rem;
}

.input-form {
	display: flex;
	align-items: start;
	flex-direction: column;
}
.container-btn {
	margin-top: 1.5rem;
}

.input-form > select {
	min-width: 100%;
}
</style>
