import { useState } from "react";

const HookUseState = () => {
    const [state, setState] = useState( {
        count: 4,
        theme:"blue"
    });
    const count = state.count;
    const theme = state.theme;
  function handleIncement() {
      setState(prevState => {
        return {theme:"red", count: prevState.count +1}
    })
  }
   function handleDecrement() {
       setState(prevState => {
         return {count:prevState.count -1}
     })
     
  }
  return (
      <>
          <div>Use State</div>
      <button onClick={handleIncement}>+</button>
          <span >{count}</span>
            <span >{theme}</span>
      <button onClick={handleDecrement}>-</button>
  </>
  );
}

export default HookUseState;