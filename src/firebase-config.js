import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBg9_c1JubqdNhZR6TeWwo2rdVIDf0wi1c",
    authDomain: "god-bless-this-project.firebaseapp.com",
    projectId: "god-bless-this-project",
    storageBucket: "god-bless-this-project.appspot.com",
    messagingSenderId: "117796486887",
    appId: "1:117796486887:web:2f0f48a58789bd4b112c42",
    measurementId: "G-RPXZSQC0J0"
  };


  export  const app = initializeApp(firebaseConfig);

  
  export const auth = getAuth(app)

  export const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName
    const email = result.user.email
    const profilePic = result.user.photoURL

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
    console.log(result);
  }).catch((error) => {
    console.log(error)
  })
};