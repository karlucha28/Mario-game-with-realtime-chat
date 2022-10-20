// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase-config";

// function LogInSignUp() {
 

//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
  
//     const [user, setUser] = useState({});
  
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//     })
    
//     // currentUser
//   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~register function~~~~~~~~~~
//     const register = async () => {
//       try {
//         const user = await createUserWithEmailAndPassword(
//           auth,
//           registerEmail,
//           registerPassword
//         );
//         console.log(user);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~login~~~~~~~function~~~~~~~~~~~~~~~
//     const login = async () => {
//       try {
//         const user = await signInWithEmailAndPassword(
//           auth,
//           loginEmail,
//           loginPassword
//         );
//         console.log(user);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~logout~~~~~~~~~function~~~~~~~~~~~~~~~~~
//     const logout = async () => {
//       await signOut(auth);
//     };
 
//   return (
//     <div className="LogInSignUp">
//     <div>
//       <h3> Register User </h3>
//       <input
//         placeholder="Email..."
//         onChange={(event) => {
//           setRegisterEmail(event.target.value);
//         }}
//       />
//       <input
//         placeholder="Password..."
//         onChange={(event) => {
//           setRegisterPassword(event.target.value);
//         }}
//       />

//       <button onClick={register}> Create User</button>
//     </div>

//     <div>
//       <h3> Login </h3>
//       <input
//         placeholder="Email..."
//         onChange={(event) => {
//           setLoginEmail(event.target.value);
//         }}
//       />
//       <input
//         placeholder="Password..."
//         onChange={(event) => {
//           setLoginPassword(event.target.value);
//         }}
//       />

//       <button onClick={login}> Login</button>
//     </div>

//     <h4> User Logged In: </h4>
//     {user?.email}

//     <button onClick={logout}> Sign Out </button>
//   </div>
//   );
// }

// export default LogInSignUp;
