import { createContext, useContext, useState } from "react";
import { TipCalculator } from "../components/TipCalculatorClass/TipCalculatorClass";
import { ErrorContext } from "../components/Error/Error";

const useStateContext = createContext();

const StateProvider = ({ children }) => {
  const { setError } = useContext(ErrorContext);

  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [personCount, setPersonCount] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [perPersonAmount, setPerPersonAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (billAmount === "" || tipPercentage === "" || personCount === "") {
      setError("Please fill out all fields");
      return;
    } else if (billAmount < 1 || tipPercentage < 1 || personCount < 1) {
      setError("Please enter a number greater than 0");
      return;
    } else if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(personCount)) {
      setError("Please enter a number");
      return;
    }

    const tipCalculator = new TipCalculator(
      billAmount,
      tipPercentage,
      personCount
    );

    setTipAmount(tipCalculator.calculateTip());
    setTotalAmount(tipCalculator.calculateTotal());
    setPerPersonAmount(tipCalculator.calculatePerPerson());

    setBillAmount("");
    setTipPercentage("");
    setPersonCount("");
  };

  return (
    <useStateContext.Provider value={{ billAmount, setBillAmount, tipPercentage, setTipPercentage, personCount, setPersonCount, tipAmount, setTipAmount, totalAmount, setTotalAmount, perPersonAmount, setPerPersonAmount, handleSubmit, }}>
      {children}
    </useStateContext.Provider>
  );
};

export { useStateContext, StateProvider };
