import { db } from '../../config/firebase';
import {
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    doc,
    getDoc,
    deleteDoc,
    updateDoc,
    increment,
} from 'firebase/firestore';

/*----------  Function Declaration  ----------*/
export const fetchAllProducts = async () => {
    const collectionReference = collection(db, 'products');
    const querySnapshot = await getDocs(collectionReference);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const fetchProductsById = async (id) => {
    const collectionReference = collection(db, 'products', id);
    const querySnapshot = await getDocs(collectionReference);

    if (!querySnapshot.exists()) {
        throw new Error('Document doesn\'t exist');
    }

    return { id: querySnapshot.id, ...querySnapshot.data() };
}



/*----------  Variable Declaration  ----------*/




/*----------  Script assignment  ----------*/



