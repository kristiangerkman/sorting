import React, { useState } from "react";
import InputForm from "./InputFrom";

const Bubble = () => {
  const [input, setInput] = useState("");

  const sort = event => {
    event.preventDefault();

    const iterate = (x, y) => {
      let tmp = x;
      x = y;
      y = tmp;

      return { x, y };
    };

    const wait = ms => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };

    const bubbleSort = async (arr, ms) => {
      for (let i = 0; i < input - 1; i++) {
        for (let j = 0; j < input - i - 1; j++) {
          await wait(ms);
          if (arr[j] > arr[j + 1]) {
            let asd = iterate(arr[j], arr[j + 1]);
            arr[j] = asd.x;
            arr[j + 1] = asd.y;
          }
          //render cooool graphics
          console.log(arr);
        }
      }
    };

    if (isNaN(input)) {
      console.log("please make sure your input is a numeric value");
    } else if (input > 300 || input < 20) {
      console.log("please provide number between 20 and 300");
    } else {
      let arr = [];
      arr = Array.from({ length: Number(input) }, () =>
        Math.floor(Math.random() * Number(input))
      );
      bubbleSort(arr, 1000);
      console.log(arr);
    }
  };

  return (
    <InputForm setInput={setInput} sort={sort} value={input} type="Bubble" />
  );
};

export default Bubble;
