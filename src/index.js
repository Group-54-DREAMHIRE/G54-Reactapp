import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

import { ConfigProvider } from "antd";
import { store } from "./store/store";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:8080/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(30,136,229)",
            colorBgContainer: 'white',
            colorBgTextHover: 'rgba(30,136,229,.1)',
            colorBgTextActive: 'rgba(30,136,229,1)',
          },}}
        >
      <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
);
