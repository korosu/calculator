export default function Button({ children, className }) {
  return (
    <button className={"h-24 bg-slate-500 pl-6 pr-6" + className}>
      {children}
    </button>
  );
}
