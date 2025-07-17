"use client ";

export default function Select({
  options,
  onSelect,
}: {
  options: {
    key: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
}) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map(option => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
