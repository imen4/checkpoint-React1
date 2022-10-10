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
    count: 0
  }
  handlerClick = () => {
    this.setState((currentState) => ({ show: !currentState.show }))
  }
  componentDidMount() {
    this.intervalId  = setInterval(
      () => {
        this.setState(prevState => {
          return {
            count: prevState.count + 1,
          };
        });
      }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="container">
        <Button onClick={this.handlerClick} variant="primary">
          {" "}
          {this.state.show ? "hide" : "show"}
        </Button>
        {this.state.show && (
          <div style={{ marginTop: "10px" }}>
            <span>Name: {this.state.Person.fullName}</span>
            <div>
              <span>Bio: {this.state.Person.bio}</span>
            </div>
            <span>Profession: {this.state.Person.profession}</span>
            <img src={anime} alt="anime" width={200} />
          </div>
        )}
          <h2>The component has been rendered for {this.state.count} seconds</h2>
      </div>
    );
  }
}

export default App;
