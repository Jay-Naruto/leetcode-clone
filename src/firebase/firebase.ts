import {  initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDUdKSegqZJbP2D8rUB99jxAqgIiDubSlE",
	authDomain: "leetcode-3a2bc.firebaseapp.com",
	projectId: "leetcode-3a2bc",
	storageBucket: "leetcode-3a2bc.appspot.com",
	messagingSenderId: "789520194144",
	appId: "1:789520194144:web:bbd2e4afd814aa8840c105"
  }

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
