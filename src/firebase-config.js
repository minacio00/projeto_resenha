import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, doc, setDoc,addDoc, collection, query, where, getDocs} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC4KclSl84EkbF1jXIVZqoKizwviQfsSX8",
  authDomain: "resenha-equinos.firebaseapp.com",
  projectId: "resenha-equinos",
  storageBucket: "resenha-equinos.appspot.com",
  messagingSenderId: "419761964191",
  appId: "1:419761964191:web:a947b56aec14353ea34eaa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const proprietariosRef = collection(db, "proprietarios");
// const proprietariosQuery = query(proprietariosRef,where("vet",'==',`${auth.currentUser.uid}`));
// const querySnapshot = getDocs(proprietariosQuery);
// const allDocs =querySnapshot.docs();
// console.debug(auth);


// const newDoc = addDoc(proprietariosRef, {
//   nome: "nome",
//   telefone: "phone",
//   Rua: "rua",
//   Bairro: "10",
//   Complemento: "complemento",
//   vet: auth.currentUser.uid
// });
// const teste = doc(db, `proprietarios/${auth.currentUser.uid}`);
// addDoc(teste, {
//   nome: "dad",
//   vet:  "tCMpMsgQRXMpfGoTe19dPEBjofc2"
//   }
// )
