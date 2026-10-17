import { useState } from "react";
import type {OrderItem} from "../types/index"


export default function useOrder(){

    const [order,useOrder] = useState <OrderItem[]>([])

    const addItem = ()=>{

        console.log("Item agregado");
    }

    return{

        addItem

    }
    
}