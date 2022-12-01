import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

const rootReducer=combineReducers({

})

export const store=legacy_createStore(rootReducer,applyMiddleware)

