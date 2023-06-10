"use client";
import { useState } from "react";
import Button from "../components/Button";
let firstInput = true;

export default function Home() {
  const [result, setResult] = useState("result");
  function calculate(x) {
    if (typeof x == "number" || x == ".") {
      if (firstInput) {
        setResult(x.toString());
        firstInput = false;
      } else setResult((p) => p + x);
    }
  }
  const arr = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "X"];
  return (
    <div className="flex flex-col">
      <div>{result}</div>
      <div className="grid grid-cols-4 gap-1">
        {arr.map((num) => (
          <Button className={" bg-slate-500"} onClick={() => calculate(num)}>
            {num}
          </Button>
        ))}
        <Button className=" col-span-2 bg-red-700 text-orange-600">
          RESET
        </Button>
        <Button className=" col-span-2 bg-red-700">=</Button>
      </div>
    </div>
  );
}
