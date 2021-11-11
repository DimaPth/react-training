import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store/index.js";
import "antd/dist/antd.css";
import { HashRouter } from "react-router-dom";
import './firebase'

ReactDOM.render(
	<Provider store={store}>
		<HashRouter basename='/'>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);
