// src/components/ui/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-teal-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 w-full"
      {...props}
    >
      {children}
    </button>
  );
}