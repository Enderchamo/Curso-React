import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
};

export default function OrderTotal({ order, tip }: OrderTotalProps) {
  const subTotalAmount = useMemo(() => calculateTotal(order), [order]);
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const total = useMemo(()=> tipAmount + subTotalAmount,[tip,order])

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
    </>
  );
}

//Funciones

function calculateTotal(order: OrderItem[]) {
  return order.reduce((total, item) => total + item.quantity * item.price, 0);
}
