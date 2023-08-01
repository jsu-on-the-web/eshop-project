import { db } from '../config/firebase';
import {
    collection,
    getDocs
} from 'firebase/firestore';

/*----------  Function Declaration  ----------*/
export const fetchAllProducts = async () => {
    console.log('Fetching all products...');
    const collectionReference = collection(db, 'products');
    const querySnapshot = await getDocs(collectionReference);
    const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched products:', products);
    return products;
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



