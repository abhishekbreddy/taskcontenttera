import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: []
    };
  }

  // Lifecycle
  componentDidMount() {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data1: data?.data?.children }));
  }

  render() {
    console.log("...............", this.state.data1);

    return (
      <div className="App">
        {this?.state?.data1.map((data, key) => (
          <div className="card m-3 bg-warning">
            <div className="card-body">
              <div className="row justify-content-between m-3">
              <div className="card-label col-3">Title:</div>
              <div className="card-value col-9">{data.data.title}</div></div>
<div className="row justify-content-between m-3">
              <div className="card-label col-3">selftext_html:</div>
              <div className="card-value col-9">{data.data.selftext_html}</div></div>
<div className="row justify-content-between m-3">
              <div className="card-label col-3">url:</div>
              <div className="card-value col-9">{data.data.url}</div></div>
<div className="row justify-content-betweem m-3">
              <div className="card-label col-3">score:</div>
              <div className="card-value col-9">{data.data.score}</div>
</div>            </div>
          </div> 
        ))}
     </div>
    );
  }
}

export default App;

