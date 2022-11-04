import { useState } from "react";

const UsestateHook = () => {
    const [count, setCount] = useState({
        num:1,
        id:"abc",
      });
      const handleCount = () => {
        setCount((prev)=>{
          return {
            ...prev,
            num: prev.num+1
          }
        })
      };
      const handleSub = () => {
        setCount((prev)=>{
          return {
            ...prev,
            num:prev.num -1
          }
        });
      };
      return (
        <div className="App">
          UseState  example
          <div>
            <button onClick={handleSub}>-</button>
            <span>{count.num}</span>
            <button onClick={handleCount}>+</button>
          </div>
        </div>
      )
}
export default UsestateHook