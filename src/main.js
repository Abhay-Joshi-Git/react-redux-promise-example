import React from "react";
import ReactDom from "react-dom";
import App from "./app.js"
import { Provider } from "react-redux";
import store from "./store.js";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider >   ,
    document.getElementById('app')
);


