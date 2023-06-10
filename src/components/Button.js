export default function Button({ children, className, onClick }) {
  return (
    <button className={"h-24 pl-6 pr-6" + className} onClick={onClick}>
      {children}
    </button>
  );
}
