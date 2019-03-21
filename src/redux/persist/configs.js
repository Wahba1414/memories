import { createStore,combineReducers,compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import autoMergeLevel2 from  'redux-persist/lib/stateReconciler/autoMergeLevel2';
import * as Reducers from '../reducers'; // the value from combineReducers

// combine reducers.
const rootReducer = combineReducers(Reducers);


const persistConfig = {
 key: 'root',
 storage: storage,
//  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

//For debugging.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(pReducer, composeEnhancers());
export const persistor = persistStore(store);
