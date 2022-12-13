import "./App.css";
import TodoList from "./containers/TodoList";
import createStore from "./redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const { store, persistor } = createStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <TodoList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
