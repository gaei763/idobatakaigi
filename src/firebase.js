import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyC7D9HbwpOmZThzN64cirA8doUNv44mNuo",
	authDomain: "idobatakaigi-b3b16.firebaseapp.com",
	databaseURL: "https://idobatakaigi-b3b16.firebaseio.com",
	projectId: "idobatakaigi-b3b16",
	storageBucket: "idobatakaigi-b3b16.appspot.com",
	messagingSenderId: "1056377779055",
	appId: "1:1056377779055:web:342b7c60e11e7bff2eae9a",
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messagesRef = database.ref("messages")

export const pushMessage = ({ name, text }) => {
	messagesRef.push({ name, text })
}
