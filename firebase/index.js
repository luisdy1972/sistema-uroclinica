import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// indexación de otros archivos .js
import { registrarUsusario, iniciarSesion, cerrarSesion } from './auth.js'
import {
	buscarDocumentos,
	guardarActualizarDocumento,
	actualizarDocumento,
	eliminarDocumento,
} from './firestore.js'

import router from '@router'

const firebaseConfig = {
	apiKey: 'AIzaSyCukXSi_ZpVeRdV8KM_bS7IjS2VaH142Fg',
	authDomain: 'sistema-uroclinica.firebaseapp.com',
	projectId: 'sistema-uroclinica',
	storageBucket: 'sistema-uroclinica.appspot.com',
	messagingSenderId: '614389175163',
	appId: '1:614389175163:web:f720efc3a34cdda8e8e3de',
}

// usuario de firebase
let user

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'es'
const db = getFirestore(app)

async function verificarAutenticacion() {
	console.log('♥')
	try {
		onAuthStateChanged(auth, (userLogin) => {
			user = userLogin
			if (!user && window.location.pathname !== '/registro') {
				router.push('/login')
			} else if (user && window.location.pathname == '/login') {
				console.log('Login ✔')
				router.push('/')
			}
		})
	} catch (error) {}
}

await verificarAutenticacion()

export {
	auth,
	db,
	buscarDocumentos,
	guardarActualizarDocumento,
	actualizarDocumento,
	eliminarDocumento,
	registrarUsusario,
	iniciarSesion,
	cerrarSesion,
	user,
}
