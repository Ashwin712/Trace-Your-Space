import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { googlesigninReducer } from "../reducers/googlesigninReducer";
import { accountReducer } from "../reducers/accountReducer";

// const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  googlesignin: googlesigninReducer,
  account: accountReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );
// export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // composeEnhancers
  );
  let persistor = persistStore(store);
  // sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

export default configureStore;
