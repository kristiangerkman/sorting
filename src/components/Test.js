import React, {useState} from "react"
import Canvas from "./Canvas"

const Test = () => {
    const [sortingArr, setSortingArr] = useState([]);
    const [indesies, setIndesies] = useState({i: 0, j: 1});

    const iterate = (x, y) => {
        let tmp = x;
        x = y;
        y = tmp;
    
        return { x, y };
      };

    const oneIteration = (arr) => {
        let tmpArr = arr
        console.log(tmpArr)
        let i = indesies.i
        let j = indesies.j
        if (tmpArr[i] > tmpArr[j]) {
          let asd = iterate(tmpArr[i], tmpArr[j]);
          tmpArr[i] = asd.x;
          tmpArr[j] = asd.y;
        } else {
          console.log("no action")
        }
        if(j+1 === tmpArr.length){
          setIndesies({i: 0, j:1})
        } else {
          setIndesies({i: i+1, j:j+1})
          console.log(tmpArr)
          setSortingArr(tmpArr)
        } 
    
      }

    const changeValue = () => {
        const newTest = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50)+1);
        if(newTest.includes(51)){
          console.log("ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        }

        setSortingArr(newTest);
    }

    return (
        <div>
          <br/>
            <button onClick={() => changeValue()}>new</button>
            <button onClick={()=> oneIteration(sortingArr)}>iterate</button>
            <Canvas arr={sortingArr}/>
        </div>
    )
}

export default Test