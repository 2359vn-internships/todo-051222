import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

export default (rootReducer: any) => {

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({ serializableCheck: false }),
  });
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
