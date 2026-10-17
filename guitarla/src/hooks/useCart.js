import { useState } from 'react'
import {useEffect} from 'react'
import { db } from '../data/db'
import {useMemo} from 'react'




export function useCart() {



    //Variables
    
    const MAX_QUANTITY = 5;
    const MIN_QUANTITY = 1;
    
    
    //Carga de datos.  
    const [data, setData] = useState([]);
    useEffect(()=>{
    
        setData(db);
    
    },[])
    
    
    //Verificacion del carrito de compras
    
    const initialCart = ()=>{
    
        const localStorageCart = localStorage.getItem('cart')
    
        return localStorageCart ? JSON.parse(localStorageCart) : []
    
    }
    
    
    //State carrito
    const [cart,setCart]= useState(initialCart); 
    
    
    
    //Sincronizacion con localStorage
    useEffect(()=>{
    
        localStorage.setItem("cart",JSON.stringify(cart))
    
    },[cart])
    
    //Funciones
    
    function addToCart(item) {
    
        const itemExists = cart.findIndex(guitar=> guitar.id === item.id);
    
        if (itemExists >= 0) {
    
            if (cart[itemExists].quantity >= MAX_QUANTITY) return
            
            const UpdateCart= [...cart]
            UpdateCart[itemExists].quantity++
            setCart(UpdateCart);
                
        
            
        }else{
            item.quantity = 1;
            setCart([...cart,item])
        }
    
    
    }
    
    
    function removeFromCart(id) {
    
        setCart(prevCart=>prevCart.filter(guitar=> guitar.id!== id));
        
    }
    
    
    function increaseQuantity(id) {
        
        const updatedCar = cart.map((item)=>{
    
            if (item.id === id && item.quantity < MAX_QUANTITY) {
                
                return{
    
                    ...item,
                    quantity: item.quantity + 1
    
                }
            }
    
            return item
        })
    
    
        setCart(updatedCar);
    
    }
    
    function decreaseQuantity(id) {
    
        const updatedCar = cart.map((item)=>{
    
            if (item.id === id && item.quantity > MIN_QUANTITY) {
                
                return{
    
                    ...item,
                    quantity: item.quantity - 1
    
                }
            }
    
            return item
        })
    
    
        setCart(updatedCar);
        
    }
    
    function clearCart(e) {
        
        setCart([]);
    }


    
    const isEmpty = useMemo( () => cart.lenght === 0,[cart] ) //Ayuda con el performance de la app, hace que solo se ejecute la validacion de si el carrito esta vacio cuando el carrito cambie.
    const cartTotal = useMemo( ()=> cart.reduce((total,item)=>  total + (item.quantity * item.price),0) , [cart])
    
    







    return {

        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        data,
        isEmpty,
        cartTotal

    }

};