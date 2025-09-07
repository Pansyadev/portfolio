// src/components/ui/Input.tsx
type InputProps = {
  label: string;
} & React.ComponentPropsWithoutRef<'input'>; // Tipe canggih untuk menerima semua props input standar

export default function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        {...props}
      />
    </div>
  );
}