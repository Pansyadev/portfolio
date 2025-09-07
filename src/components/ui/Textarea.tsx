// src/components/ui/Textarea.tsx
type TextareaProps = {
  label: string;
} & React.ComponentPropsWithoutRef<'textarea'>;

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        rows={4}
        {...props}
      />
    </div>
  );
}