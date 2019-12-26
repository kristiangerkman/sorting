import React, { useState, useEffect } from "react";
import InputForm from "./InputFrom";
import Canvas from "./Canvas"

const Bubble = () => {
  const [input, setInput] = useState("");
  const [sortedArr, setSortedArr] = useState([]);
  const [indesies, setIndesies] = useState({i: 0, j: 1});
  

console.log(sortedArr)
  let arra = []
  useEffect(()=>{
    arra = [...sortedArr];
  })

  const oneIteration = async () => {
    console.log(sortedArr)
    let tmpArr = [...arra]
    console.log(tmpArr)
    let i = indesies.i
    let j = indesies.j
    console.log ( i + " " +j)
    if (tmpArr[i] > tmpArr[j]) {
      let asd = iterate(tmpArr[j], tmpArr[j]);
      tmpArr[j] = asd.x;
      tmpArr[j] = asd.y;
    } else {
      console.log("no action")
    }
    if(j+1 === tmpArr.length){
      setIndesies({i: 0, j:1})
    } else {
      setIndesies({i: i+1, j:j+1})
      setSortedArr(tmpArr)
    } 

  }

  const newArr = () => {
    let arr = Array.from({ length: Number(input) }, () =>
    Math.floor(Math.random() * Number(input))
  );
   setSortedArr(arr);
   setIndesies({i: 0, j: 1})
  }
  
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
      }
    }
  };

  const iterate = (x, y) => {
    let tmp = x;
    x = y;
    y = tmp;

    return { x, y };
  };

  const sort = async event =>  {
    event.preventDefault();

    if (isNaN(input)) {
      console.log("please make sure your input is a numeric value");
    } else if (input > 300 || input < 20) {
      console.log("please provide number between 20 and 300");
    } else {
      
      newArr();
      bubbleSort(sortedArr, 0)
      console.log(sortedArr)
      
    }
  };

  return ( 
    <div>
    <InputForm setInput={setInput} sort={sort} value={input} type="Bubble" />
    <button onClick={() => newArr()} >asdasdas</button>
    <button onClick={() => oneIteration()}>sdsd</button>
    <Canvas arr={sortedArr} />
    </div>
  );
};

export default Bubble;
