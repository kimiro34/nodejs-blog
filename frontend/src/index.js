import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
   document.getElementById("root"));
