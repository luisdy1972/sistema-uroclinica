import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { ref } from 'vue'
const firebaseConfig = {
	apiKey: 'AIzaSyCukXSi_ZpVeRdV8KM_bS7IjS2VaH142Fg',
	authDomain: 'sistema-uroclinica.firebaseapp.com',
	projectId: 'sistema-uroclinica',
	storageBucket: 'sistema-uroclinica.appspot.com',
	messagingSenderId: '614389175163',
	appId: '1:614389175163:web:f720efc3a34cdda8e8e3de',
}
const user = ref({})

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'es'
const db = getFirestore(app)

// evento que vigila la autenticación
onAuthStateChanged(auth, async (userLogin) => {
	if (!userLogin) {
		// console.log(userLogin)
		user.value = {}
	} else {
		console.log(userLogin)
		user.value = userLogin
	}
})
// indexación de otros archivos
import * as querys from './firestore.js'
export { auth, db, user, querys }
