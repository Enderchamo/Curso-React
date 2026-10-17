import { menuItems } from "../src/data/data";
import MenuItem from "../src/components/MenuItem";
import useOrder from "./hooks/UseOrder";



function App() {

  const {addItem} = useOrder()


  return (
    <>

    <header className=" bg-yellow-100 py-5">
      <h1 className=" text-center  text-4xl  font-black" > Calculadora de propinas </h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

    <div className="p-5">
      
        <div className="space-y-3 mt-10">

          <h2 className="text-4xl font-black">Menu</h2>
          {menuItems.map(item=>(

            <MenuItem

            key={item.id}
            item={item}
            addItem={addItem}

            />

          ))}

        </div>
    </div>

    <div>
      <h2>Consumo</h2>
    </div>

    </main>
      
    </>
  )
}

export default App
