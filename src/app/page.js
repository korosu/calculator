import Button from "../components/Button";
export default function Home() {
  const arr = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", "0", "/", "X"];
  return (
    <div className="flex flex-col">
      <div>reuslt</div>
      <div className="grid grid-cols-4 gap-1">
        {arr.map((num) => (
          <Button className={""}>{num}</Button>
        ))}
        <Button className=" col-span-2 bg-red-700">RESET</Button>
        <Button className=" col-span-2 bg-red-700">=</Button>
      </div>
    </div>
  );
}
