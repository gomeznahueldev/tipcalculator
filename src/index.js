import { ErrorProvider } from "./components/Error/Error";
import { StateProvider } from "./useStateContext/useStateContext";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./MediaQueries.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ErrorProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </ErrorProvider>
  </StrictMode>
);