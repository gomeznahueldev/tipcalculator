import { ErrorContext } from "../../components/Error/Error";
import { useContext } from "react";
import { useStateContext } from "../../useStateContext/useStateContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Form.css";

const Form = () => {
  const { billAmount, setBillAmount, tipPercentage, setTipPercentage, personCount, setPersonCount, handleSubmit, } = useContext(useStateContext);
  const { error } = useContext(ErrorContext);

  return (
    <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <Input label="Bill Amount" type="number" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} placeholder="Bill Amount" id="bill-amount" />
        </div>
        <div className="form-control">
          <Input label="Person Count" type="number" value={personCount} onChange={(e) => setPersonCount(e.target.value)} placeholder="Person Count" id="person-count" />
        </div>
        <div className="form-control">
          <Input label="Tip Percentage" type="number" value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)} placeholder="Tip Percentage" id="tip-percentage" />
        </div>
      {error && <p className="error">{error}</p>}
        <div>
          <Button type="submit" textButton="Calculate" disabled={billAmount.length > 0 && personCount.length > 0 && tipPercentage.length > 0 ? false : true} className={billAmount.length > 0 && personCount.length > 0 && tipPercentage.length > 0 ? "btn" : "btn-disabled"} />
        </div>
    </form>
  );
};

export default Form;
