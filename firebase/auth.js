import { auth, user } from '.'
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

async function iniciarSesion(email, pass) {
	return await signInWithEmailAndPassword(auth, email, pass)
}

async function registrarUsusario(email, pass) {
	return await createUserWithEmailAndPassword(auth, email, pass)
}

async function cerrarSesion() {
	user.value = undefined
	return await signOut(auth)
}

export { registrarUsusario, iniciarSesion, cerrarSesion }
