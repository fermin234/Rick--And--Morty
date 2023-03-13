import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios"
import { Provider } from "react-redux";
import store from "./redux/store";
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);