// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARuvMKKYH0-rZMc9Hv0hBWLHygPYkDfhA",
  authDomain: "clyb-sness-clothes.firebaseapp.com",
  projectId: "clyb-sness-clothes",
  storageBucket: "clyb-sness-clothes.appspot.com",
  messagingSenderId: "691466111425",
  appId: "1:691466111425:web:23746a9cd4240fc657c740"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Función para obtener un solo producto
export const getSingleProduct = async (id) => { 
    const documentRef = doc(db, 'items', id)

    try {
        const snapshot= await getDoc(documentRef);
        if (snapshot.exists()){
            return snapshot.data();
        } else {
            console.error("El documento no existe");
        }
    } catch (error) {
        console.error("Error al obtener el documento: ", error);
    }
};

// Función para enviar la orden a Firebase, ahora con un callback para devolver el orderId
export const sendOrder = (orderForm, callback) => {
    const order = orderForm;
    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({id}) => {
        callback(id);  // Devolvemos el orderId al callback
    });
};

// Función para obtener productos
export const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const productList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return productList;
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
};

// Función para encontrar un producto por su ID
export const findProduct = async (id) => {
    const prods = await getProducts();
    return prods.find((prod) => prod.id == id);
};
