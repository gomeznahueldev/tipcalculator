import { createContext, useEffect, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const handleError = (error) => {
    setError(error);
    setErrorMessage(error.message);
  };

  return (
    <ErrorContext.Provider value={{ error, setError, errorMessage, setErrorMessage, handleError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
