import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Counter from "./components/Counter";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import DestinationList from "./components/DestinationList";
import DestinationFact from "./components/DestinationFact";
import ResetApp from "./components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="text-white">
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4">Destination List</h4>
        <DestinationList />
        <DestinationFact />
      </div>
    </Provider>
  </div>
);
