"use client";
import { useState } from "react";
import Button from "../components/Button";
let firstInput = true;
let dotAdded = false;
let baseNum = 0;
let operator = "";

export default function Home() {
  const [result, setResult] = useState("result");
  function calculate(x) {
    if (typeof x == "number") {
      if (firstInput) {
        setResult(x.toString());
        firstInput = false;
      } else setResult((p) => p + x);
    }
    if (x == "." && !dotAdded) {
      dotAdded = true;
      setResult((prev) => prev + ".");
    }
    if (x == "DEL") {
      setResult((prev) => {
        if (prev.charAt(prev.length - 1) == ".") {
          dotAdded = false;
          return prev.slice(0, -1);
        } else {
          return prev.slice(0, -1);
        }
      });
    }

    if (x == "+" || x == "/" || x == "X" || x == "-") {
      operator = x;
      baseNum = result;
      firstInput = true;
    }

    if (x == "=") {
      console.log("=");
      if (operator && baseNum) {
        console.log("true");
        switch (operator) {
          case "X":
            setResult((prev) => baseNum * prev);
        }
      }
    }
  }

  const arr = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "X"];
  return (
    <div className="flex flex-col">
      <div>{result}</div>
      <div className="grid grid-cols-4 gap-1">
        {arr.map((num) => (
          <Button
            key={num}
            className={" bg-slate-500"}
            onClick={() => calculate(num)}
          >
            {num}
          </Button>
        ))}
        <Button className=" col-span-2 bg-red-700 text-orange-600">
          RESET
        </Button>
        <Button
          className=" col-span-2 bg-red-700"
          onClick={() => calculate(num)}
        >
          =
        </Button>
      </div>
    </div>
  );
}
