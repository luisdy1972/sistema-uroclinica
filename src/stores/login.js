import { defineStore } from 'pinia'

const useLogin = defineStore('login', {
	// estados
	state: () => ({
		sesion: false,
	}),

	// getters
	getters: {},

	// acciones
	actions: {
		logear() {
			this.sesion = true
		},
		salir() {
			this.sesion = false
		},
	},
})

export { useLogin }
