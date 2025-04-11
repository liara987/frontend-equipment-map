interface SelectInputProps {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
}) => (
  <label htmlFor={label} className="block text-sm font-medium text-gray-700">
    {label}:
    <select
      className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      value={value || ""}
      onChange={(e) => onChange(e.target.value || null)}
      id={label}
    >
      <option value="">Todos</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

export default SelectInput;
