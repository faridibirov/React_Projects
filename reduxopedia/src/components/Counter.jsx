import React, { act } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "../redux/store";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleIncrementMultiplier = () => {
    dispatch(incrementMultiplier(Number(inputValue)));
  };

  const handleDecrementMultiplier = () => {
    dispatch(decrementMultiplier(Number(inputValue)));
  };

  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increment())}
            >
              {" "}
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement())}
            >
              {" "}
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Multiplier Counter</h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="multiplier..."
                  className="form-control"
                />
              </div>
              <div className="col-4 p-1">
                {" "}
                <button
                  className="btn btn-primary form-control"
                  onClick={handleIncrementMultiplier}
                >
                  {" "}
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                {" "}
                <button
                  className="btn btn-danger form-control"
                  onClick={handleDecrementMultiplier}
                >
                  {" "}
                  Remove
                </button>
              </div>
            </div>{" "}
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
