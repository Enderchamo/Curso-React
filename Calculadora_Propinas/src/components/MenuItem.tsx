import type { TMenuItem } from "../types/index";

type MenuItemProps={

  item : TMenuItem

}


export default function MenuItem({item} : MenuItemProps) {
  return (

    <button
    
    className="border-2 border-amber-300 w-full hover:bg-amber-300 p-3 flex justify-between"
    
    >

      <p>{item.name}</p>

      <p className="font-black">{item.price}</p>
    
    
    </button>

  )
}
