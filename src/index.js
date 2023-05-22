import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   { path: "/", element: <App/> },
// ]);
root.render(
  <BrowserRouter basename="/index.html">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
