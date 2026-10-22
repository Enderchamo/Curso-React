const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

//Componente

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form className="flex flex-wrap gap-4">
        {tipOptions.map((tipOrder) => (
          <label
            key={tipOrder.id}
            htmlFor={tipOrder.id}
            className="flex items-center gap-2 cursor-pointer"
          >
            {tipOrder.label}
            <input
              id={tipOrder.id}
              type="radio"
              name="tip"
              value={tipOrder.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOrder.value === tip}
            />
          </label>
        ))}
      </form>
    </div>
  );
}
