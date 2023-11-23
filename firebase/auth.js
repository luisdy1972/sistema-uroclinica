import { auth } from '.'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

async function iniciarSesion() {}

async function cerrarSesion() {
	return signOut(auth)
}

async function registrarUsusario() {}

export { registrarUsusario, iniciarSesion, cerrarSesion }
