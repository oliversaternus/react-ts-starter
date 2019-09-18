import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import SizeStore from "./stores/SizeStore";
import { HashRouter } from 'react-router-dom';
import App from './App';

const sizeStore = new SizeStore();

ReactDOM.render(
  <Provider
    sizeStore={sizeStore}
  >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);