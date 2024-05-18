import React from "react";
import "./App.css";
import Mobile from "./components/Mobile/mobile";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Mobile />
      </Provider>
    </>
  );
}

export default App;
