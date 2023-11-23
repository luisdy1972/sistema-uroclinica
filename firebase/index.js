import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
	getFirestore,
	collection,
	doc,
	query,
	getDocs,
	addDoc,
	setDoc,
	deleteDoc,
	where,
	updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCukXSi_ZpVeRdV8KM_bS7IjS2VaH142Fg',
	authDomain: 'sistema-uroclinica.firebaseapp.com',
	projectId: 'sistema-uroclinica',
	storageBucket: 'sistema-uroclinica.appspot.com',
	messagingSenderId: '614389175163',
	appId: '1:614389175163:web:f720efc3a34cdda8e8e3de',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'es'
const db = getFirestore(app)

// PASAR A UN NUEVO DOCUMENTO
// evento que vigila la autenticación
onAuthStateChanged(auth, async (userLogin) => {
	if (!userLogin) {
		user.value = {}
	} else {
		user.value = userLogin
	}
})

async function buscarDocumentos(colle, condition) {
	// el id del documento en una pripiedad del documento
	let documentos = []
	if (condition) {
		try {
			const consulta = await getDocs(
				query(
					collection(db, colle),
					where(condition[0], condition[1], condition[2])
				)
			)
			consulta.forEach((doc) => {
				let documento = doc.data()
				documento.id = doc.id
				documentos.push(documento)
			})
			return documentos
		} catch (err) {
			console.error(err)
		}
	} else {
		// el id del documento en una pripiedad del documento
		try {
			const consulta = await getDocs(query(collection(db, colle)))
			consulta.forEach((doc) => {
				let documento = doc.data()
				documento.id = doc.id
				documentos.push(documento)
			})
			return documentos
		} catch (err) {
			console.error(err)
		}
	}
}

async function actualizarDocumento(colle, id, data) {
	try {
		return await updateDoc(doc(db, colle, id), data)
	} catch (error) {
		console.error(error)
	}
}

async function guardarActualizarDocumento(colle, data, id) {
	try {
		if (!id) {
			return await addDoc(collection(db, colle), data)
		} else {
			return await setDoc(doc(db, colle, id), data)
		}
	} catch (error) {
		console.error(error)
	}
}

async function eliminarDocumento(colle, id) {
	try {
		return await deleteDoc(doc(db, colle, id))
	} catch (error) {
		console.error(error)
	}
}
