import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props); //inherit from parent component ie react
    this.state = { location: "Bengaluru" };
    //need to manually bind the functiont to this - current comp instance 
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    console.log("Loading weather details...");
    console.log(this);
  }

  render() {
    return (
      <div className="app">
        <h1>🌞Classy weather⛈️</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather details</button>
      </div>
    );
  }
}

export default App;
