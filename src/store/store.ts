import { combineReducers, createStore } from "redux";
import openFormReducer from "./reducres/openFormReducer";
import renderReducer from "./reducres/renderReducer";
import addInfoReducer from "./reducres/addInfo"
import deleteReducer from "./reducres/deleteReducer";
import editReducer from "./reducres/openEdit";

const rootReducer = combineReducers({
    renderReducer,
    openFormReducer,
    addInfoReducer,
    deleteReducer,
    editReducer,
}
)

const store = createStore(rootReducer)

export default store