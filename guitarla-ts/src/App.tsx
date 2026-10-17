
import Header from './Components/Header.js'
import Guitarra from './Components/Guitarra.js'
import './App.css'
import { useCart } from './hooks/useCart.js';


function App() {


    const{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        data,
        isEmpty,
        cartTotal 
     } = useCart()




    return (
    <>
    
        <Header
        
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}
            isEmpty={isEmpty}
            cartTotal={cartTotal}
    
    /> 
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

            {data.map((guitar)=>(
                
                <Guitarra 
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
                />

            ))}

            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
