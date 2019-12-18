import React, { useState } from "react";
import InputForm from "./InputFrom";

const Selection = () => {
  const [input, setInput] = useState("");

  const sort = event => {
    event.preventDefault();
    if (isNaN(input)) {
      console.log("please make sure your input is a numeric value");
    } else if (input > 300 || input < 20) {
      console.log("please provide number between 20 and 300");
    } else {
      let arr = [];
      arr = Array.from({ length: Number(input) }, () =>
        Math.floor(Math.random() * Number(input))
      );
      console.log(arr);
    }
  };

  return (
    <InputForm setInput={setInput} sort={sort} value={input} type="Selection" />
  );
};

export default Selection;
