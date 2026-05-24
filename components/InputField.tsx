type Props = {
    label: string;
    onChange: (value: number) => void;
  };
  
  export default function InputField({
    label,
    onChange,
  }: Props) {
    return (
      <div>
        <label className="block mb-2 font-medium">
          {label}
        </label>
  
        <input
          type="number"
          className="w-full border rounded-xl px-4 py-3"
          onChange={(e) =>
            onChange(Number(e.target.value))
          }
        />
      </div>
    );
  }