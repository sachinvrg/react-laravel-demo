import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducer";
import ReduxThunk from 'redux-thunk'
export default function configureStore() {
    const store = createStore(reducer,applyMiddleware(ReduxThunk));
    return store;
}