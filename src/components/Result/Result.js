import { useContext } from "react";
import { useStateContext } from "../../useStateContext/useStateContext";
import "../../useStateContext/useStateContext";
import './Result.css';

const Result = () => {
  const { tipAmount, totalAmount, perPersonAmount } = useContext(useStateContext);

  return (
    <div className="result">
      <div className="result-control">
        <p>Tip Amount:</p>
        <p>{`$${parseInt(tipAmount).toFixed(2)}`}</p>
      </div>
      <div className="result-control">
        <p>Total Amount:</p>
        <p>{`$${parseInt(totalAmount).toFixed(2)}`}</p>
      </div>
      <div className="result-control">
        <p>Per Person Amount: </p>
        <p>{`$${parseInt(perPersonAmount).toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Result;
