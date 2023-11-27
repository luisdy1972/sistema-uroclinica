import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// vue
import { ref } from 'vue'
// indexación de otros archivos .js
import { registrarUsusario, iniciarSesion, cerrarSesion } from './auth.js'
import {
	buscarDocumentos,
	guardarActualizarDocumento,
	actualizarDocumento,
	eliminarDocumento,
} from './firestore.js'

const firebaseConfig = {
	apiKey: 'AIzaSyCukXSi_ZpVeRdV8KM_bS7IjS2VaH142Fg',
	authDomain: 'sistema-uroclinica.firebaseapp.com',
	projectId: 'sistema-uroclinica',
	storageBucket: 'sistema-uroclinica.appspot.com',
	messagingSenderId: '614389175163',
	appId: '1:614389175163:web:f720efc3a34cdda8e8e3de',
}

const user = ref()
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'es'
const db = getFirestore(app)

// guardian de la sesión
onAuthStateChanged(auth, (userLogin) => {
	if (userLogin) {
		user.value = userLogin
		console.log('Logeado 👌🏼')
	} else {
		user.value = null
		console.log('X')
	}
})

export {
	auth,
	db,
	user,
	buscarDocumentos,
	guardarActualizarDocumento,
	actualizarDocumento,
	eliminarDocumento,
	registrarUsusario,
	iniciarSesion,
	cerrarSesion,
}
