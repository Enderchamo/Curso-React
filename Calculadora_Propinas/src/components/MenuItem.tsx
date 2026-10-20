import type { TMenuItem } from "../types/index";

type MenuItemProps = {
  item: TMenuItem;
  addItem: (item: TMenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-amber-300 w-full hover:bg-amber-300 p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>

      <p className="font-black">{item.price}</p>
    </button>
  );
}
