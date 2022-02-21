import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCwg2UiXNLHpHUd0m4UF5PqlxV9-kTjhTM",
  authDomain: "netflix-app-clone-using-tmdb.firebaseapp.com",
  projectId: "netflix-app-clone-using-tmdb",
  storageBucket: "netflix-app-clone-using-tmdb.appspot.com",
  messagingSenderId: "196897923772",
  appId: "1:196897923772:web:ddcab6269da78d46f0e6b9",
};

const app = firebase.initializeApp(config);

// seedDatabase(Firebase);  //comment out after running once or it will create duplicates in firestore!

const db = app.firestore();
// const auth = firebase.auth();
const auth = getAuth(app);

export { auth };
export default db;
