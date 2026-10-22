import { useState } from "react";
import type { OrderItem, TMenuItem } from "../types/index";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: TMenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const newOrder = order.map((orderItem) =>
        increaseItemQuantity(orderItem, item),
      );
      setOrder(newOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    }

    console.log(item);
  };

  const removeItem = (id: TMenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}

function increaseItemQuantity(orderItem: OrderItem, item: TMenuItem) {
  return orderItem.id === item.id
    ? { ...orderItem, quantity: orderItem.quantity + 1 }
    : orderItem;
}
