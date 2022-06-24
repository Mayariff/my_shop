import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {addDoc, collection, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import {ItemsAPI} from "../../API/itemsAPI";
import Item from '../../Components/Item/Item';
import s from './Catalog.module.scss'


const Catalog = () => {
    const {db}= useContext(Context)
    const [items, setItems]= useState<any>([])
    const itemCollectionRef= collection(db,'items')
    useEffect(()=>{
           /* const getItems = async () => {
                const data = await getDocs(itemCollectionRef)

                const a =data.docs.map((doc) => ({...doc.data(), id: doc.id}) )
                console.log(a)
                // @ts-ignore
                setItems(a)
            }*/
            //getItems()
            let a = ItemsAPI.getItems().then(res=> setItems(res))
        },
        [])

    const create = async ()=>{
        await addDoc(itemCollectionRef, {
            category: 'украшение',
            description: "тоже красивые",
            name: "Сережки",
            price: 100})
    }

    const change = async (id:string)=>{
        const itemDoc= doc(db,'items', id)
    const newField = {name: 'цепочка'}
        await updateDoc(itemDoc,newField)
    }
    const del = async (id:string)=>{
        const itemDoc= doc(db,'items', id)
       await deleteDoc(itemDoc)
    }



    // console.log(items)

 /* const {db}= useContext(Context)*/


    return (
        <div className={s.catalog}>
            {/*{items.map((i:any)=><div key={i.id}> <Link to={`${i.id}` }>{i.name}</Link>
            <button onClick={()=>{change(i.id)}}>change</button>
            <button onClick={()=>{del(i.id)}}>X</button>
            </div>)
        }
            <button onClick={()=>{create()}}>+</button>*/}
             <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

export default Catalog;

