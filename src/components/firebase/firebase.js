// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, getDocs,collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARuvMKKYH0-rZMc9Hv0hBWLHygPYkDfhA",
  authDomain: "clyb-sness-clothes.firebaseapp.com",
  projectId: "clyb-sness-clothes",
  storageBucket: "clyb-sness-clothes.appspot.com",
  messagingSenderId: "691466111425",
  appId: "1:691466111425:web:23746a9cd4240fc657c740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
//Obtener producto
export const getSingleProduct = async (id) => { 
    const documentRef = doc(db, 'items', id)

    try {
        const snapshot= await getDoc(documentRef);
        if (snapshot.exists()){
            return snapshot.data();
        }else {
            console.error("El documento no existe");
            
        }
    } catch (error) {
        console.error("Error al obtener el documento: ", error);
    }
}

export const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const productList = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        return productList;
        
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
}

export const findProduct = async (id) => {
    const prods = await getProducts();
    return prods.find((prod) => prod.id == id);
}
