import {legacy_createStore, combineReducers, applyMiddleware,compose} from "redux";
import {Authreducer} from "./Auth/auth.reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  Auth: Authreducer,
});

const createCompose=Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
