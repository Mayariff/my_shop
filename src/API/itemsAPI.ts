import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase-config";
import {useState} from "react";

export const ItemsAPI ={
    getItems: async () => {
        const itemCollectionRef = collection(db, 'items')
        const data = await getDocs(itemCollectionRef)
        const items = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return items
    }
}