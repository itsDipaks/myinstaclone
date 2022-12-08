import {legacy_createStore, combineReducers, applyMiddleware,compose} from "redux";
import {Authreducer} from "./Auth/auth.reducer";
import thunk from "redux-thunk";
import { FeedsReducer } from "./Feeds/feeds.reducer";
import { ProfileReducer } from "./Profile/Profile.reducer";
import { CommentReducer } from "./Comment/comment.reducer";
const rootReducer = combineReducers({
  Auth: Authreducer,
  Feeds:FeedsReducer,
  Profile:ProfileReducer,
  Comment:CommentReducer
});

const createComposer=Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
