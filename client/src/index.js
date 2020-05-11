import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const store = createStore(
	rootReducer,
	applyMiddleware( thunk )
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<MuiThemeProvider theme={responsiveFontSizes( createMuiTheme() )}>
				<App />
			</MuiThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById( "root" )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
