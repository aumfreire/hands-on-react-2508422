//Imports objects/functions useState is the most common
import { useState } from "react";

export default () =>{
  const [count,setCount] = useState(0)
  return(
     <button className="outline" onClick={() => setCount(count + 1)}>
        {/* You can use IF STATEMENT but that is not the best way to do that */}
        {/* {(()=>{
          if (count === 0){
            return "Click to support";
          } else {
            return `Supported ${count} times`
          }
        })()} */}

        {/* USE THIS INSTEAD */}
        {count === 0 ? "Click to support": `Supported ${count} times`}
     </button>

  )
}