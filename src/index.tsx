import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import SizeStore from "./stores/SizeStore";
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';

const sizeStore = new SizeStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#155799',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ebeef0',
      contrastText: '#000000',
    },
    action: {
      disabledBackground: '#09421d'
    },
    background: {
      default: '#2f2f33'
    }
  },
});

ReactDOM.render(
  <Provider
    sizeStore={sizeStore}
  >
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);