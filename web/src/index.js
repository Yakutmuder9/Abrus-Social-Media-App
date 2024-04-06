import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
