// Importing from React.
import React from 'react';
// Importing from React-Native.
import {AppRegistry} from 'react-native';
// Importing from 'react-redux'.
import { Provider } from 'react-redux';
//Importing from persist.
import { PersistGate } from 'redux-persist/lib/integration/react';


import App from './App';
import {name as appName} from './app.json';
// Importing the created store and the persistor
import { persistor, store } from './src/redux/persist/configs';

var ReduxComponent = function(props) { 
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => ReduxComponent);
