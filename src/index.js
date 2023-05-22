import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   { path: "/", element: <div>Test page</div> },
// ]);
root.render(
  <React.StrictMode>
    <BrowserRouter path={"/"}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
