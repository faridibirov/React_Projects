import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count: 0,
      status: "",
      lastPlay: "",
    };
  }

  handleAttack = () => {
    //alert("Attack clicked");
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      let newStatus;
      if (newCount > 10) {
        newStatus = "You won";
      }
      if (newCount < -10) {
        newStatus = "You lost";
      }
      return {
        count: newCount,
        status: newStatus,
        //  status: newCount>10?"You Won!" : previousState.status,
        lastPlay: "Attack",
      };
    });
    // this.setState({ count: this.state.count + 1 });
  };

  handleDefence = () => {
    // alert("Defend clicked");
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      let newStatus;
      if (newCount >= 10) {
        newStatus = "You win";
      }
      if (newCount <= -10) {
        newStatus = "You lose";
      }
      return {
        count: newCount,
        status: newStatus,
        // status: newCount<-10?"You Lost!" : previousState.status,
        lastPlay: "Defence",
      };
    });
    // this.setState({ count: this.state.count - 1 });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        status: "",
        lastPlay: "",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count} </h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <h3>Game Status: {this.state.status} </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 ">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            onClick={this.handleRandomPlay}
            className="btn btn-secondary w-100 mt-2"
          >
            Random play
          </button>
          <br />
          <button
            onClick={this.handleReset}
            className="btn btn-warning w-100 mt-2"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
