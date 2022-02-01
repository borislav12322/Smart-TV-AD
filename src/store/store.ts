import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from 'store/app-reducer';
import { PhoneFormReducer } from 'store/PhoneForm-reducer';

const rootReducer = combineReducers({ appReducer, PhoneFormReducer });
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
