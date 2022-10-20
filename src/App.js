// import { useState, useEffect } from 'react';
import './App.css';
import { signInWithGoogle } from './firebase-config';
import React, { useRef, useState } from 'react';


import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc, orderBy,query,limit,serverTimestamp} from 'firebase/firestore'
import {db} from './firebase-config'
import {app} from './firebase-config'
import { auth } from "./firebase-config";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import NewUserOne from './components/NewUserOne';
import LogInSignUp from './components/LogInSignUp';

function App() {

  const [user] = useAuthState(auth);
  

  
 
  return (
    <div className="App">
      


      <header>
        {/* <button onClick={signInWithGoogle}>Sign in With Google</button> */}
        {/* <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("profilePic")}/> */}
         <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
        <SignIn />
      </section>
      {/* <LogInSignUp/> */}
     {/* <NewUserOne/> */}

     
    </div>
  );
}

function SignIn() {


  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(db, 'messages');
  // const query = messagesRef.orderBy('createdAt').limit(25);
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  

  const [formValue, setFormValue] = useState('');

 
  const sendMessage = async (e) => {
    e.preventDefault();
    
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
      })
    // await messagesRef.add({
    //   text: formValue,
    //   createdAt: serverTimestamp(),
    //   uid,
    //   photoURL
    // })

    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}



function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}














export default App;
