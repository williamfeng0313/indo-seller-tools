type Props = {
    label: string;
    value: string | number;
  };
  
  export default function ResultCard({
    label,
    value,
  }: Props) {
    return (
      <div>
        <p className="text-gray-400">
          {label}
        </p>
  
        <h3 className="text-4xl font-bold mt-2">
          {value}
        </h3>
      </div>
    );
  }