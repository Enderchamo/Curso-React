import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
  const subTotalAmount = useMemo(() => calculateTotal(order), [order]);
  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip]);
  const total = useMemo(() => tipAmount + subTotalAmount, [tipAmount, subTotalAmount]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total Y propina</h2>
        <p>
          Subtotal a pagar:{""}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{""}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>

      <button
        type="button"
        className="w-full bg-black uppercase text-white font-bold mt-10 p-3 rounded-md hover:bg-black/80 transition-colors disabled:opacity-10 disabled:cursor-not-allowed"
        disabled={subTotalAmount === 0}
        onClick={placeOrder}
      >
        Guardar ordenen
      </button>
    </>
  );
}

//Funciones

function calculateTotal(order: OrderItem[]) {
  return order.reduce((total, item) => total + item.quantity * item.price, 0);
}
