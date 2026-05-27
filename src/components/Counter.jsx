import React from "react";
import "./Counter.css";

class Counter extends React.Component {


  
  render() {
    return (
      <div className="counter">
        <span className="counterValue">0</span>
        <div className="counterControls">
          <button onClick={} className="btn" type="button">
            -1
          </button>
          <button className="btn" type="button">
            +1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter


// export const Counter = () => {
// return(
//     <div className="counter">
//         <span className="counterValue">0</span>
//         <div className="counterControls">
//             <button className="btn" type="button">-1</button>
//             <button className="btn" type="button">+1</button>
//         </div>
//     </div>
// )
// }
