import type { OrderItem } from "../types/index";
import { formatCurrency } from "../helpers/index";

type OrderContenProps = {
  order: OrderItem[];
  removeItem: (id: number) => void;
};

//Componente

export default function OrderConten({ order, removeItem }: OrderContenProps) {
  return (
    <>
      <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-10">{renderOrder(order, removeItem)}</div>
      </div>
    </>
  );
}

//Fin componente

//Funciones
function renderOrder(order: OrderItem[], removeItem: (id: number) => void) {
  return order.map((item) => (
    <div
      key={item.id}
      className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
    >
      <div>
        <p className="font-black">
          {item.name}-{formatCurrency(item.price)}
        </p>
        <p className="font-black">
          Cantidad : {item.quantity} -{" "}
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>

      <button
        type="button"
        className="flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors h-8 w-8 shrink-0 rounded-full text-white font-black"
        onClick={() => removeItem(item.id)}
      >
        x
      </button>
    </div>
  ));
}
