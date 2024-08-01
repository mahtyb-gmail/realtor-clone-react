// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC8T10JKs7kMmQoLn36p5s8J-khdx4SABY",
	authDomain: "cffbpg-af179.firebaseapp.com",
	projectId: "cffbpg-af179",
	storageBucket: "cffbpg-af179.appspot.com",
	messagingSenderId: "815975259662",
	appId: "1:815975259662:web:1e56de4e0b426add3e665f",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
