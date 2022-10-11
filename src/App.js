import "./App.css";
import React from "react";
import anime from "./assets/anime.jpg";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Aki Kōdā",
      bio: "defy difficulties😣, put effort, fall and get up, keep learning and hope to be a developer😊!!",
      imgSrc: anime,
      profession: "developer 💻",
    },
    show: false,
    count1:0,
    count: 0, intervalId: 0
  }
  /*handlerClick = () => {
    this.setState((currentState) => ({ show: !currentState.show }))
  }*/
  componentDidMount() {
    this.intervalId1  = setInterval(
      () => {
        this.setState(prevState => {
          return {
            count1: prevState.count1 + 1,
          };
        });
      }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId1 );
  }
  handleClick2 = () => {
    this.setState((currentState) => ({ show: !currentState.show }))
    if(this.state.intervalId){
      clearInterval(this.state.intervalId);
      this.setState(prevState => {
        return {
          ...prevState,
          intervalId: 0,
          count:0,
        };
      });
      console.log(this.state.intervalId)
      return;
    }
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);
    
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }

  render() {
    return (
      <div>
        <h2>The component has been rendered for {this.state.count1} seconds</h2>
      <div className="container">
        <Button onClick={this.handleClick2} variant="primary">
          {this.state.show ? "hide" : "show"}
        </Button>
        {this.state.show && (
          <div style={{ marginTop: "10px" }}>
            <span>Name: {this.state.Person.fullName}</span>
            <div>
              <span>Bio: {this.state.Person.bio}</span>
            </div>
            <span>Profession: {this.state.Person.profession}</span>
            <div>
            <img src={anime} alt="anime" width={200} />
            </div>
            <h2>The component has been rendered for {this.state.count} seconds</h2>
          </div>
        )}
                    
          {/* <button onClick={this.handleClick2}>
            {this.state.intervalId? "Stop counter": "Start counter"}
          </button> */}
          </div>
          
      </div>
    );
  }
}

export default App;
