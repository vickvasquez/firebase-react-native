import firebase from 'firebase'
import 'firebase/firestore'

const config = {
	apiKey: "AIzaSyDXxYUdl473QGtca688arE1TQeyTVJI2vM",
	authDomain: "login-auth-social.firebaseapp.com",
	databaseURL: "https://login-auth-social.firebaseio.com",
	projectId: "login-auth-social",
	storageBucket: "login-auth-social.appspot.com",
	messagingSenderId: "99573341989"
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const fireStore = firebase.firestore()
