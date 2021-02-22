import React from "react";
import { createStore } from "redux";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";//se encarga se saber la estructura y a donde se ha movido nuestra aplicacion
import initialState from "../initialState";
import reducer from "../reducers";

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}//componentes que necesitan ser estrcuturados desde este mock
        </Router>
    </Provider>
);

export default ProviderMock;