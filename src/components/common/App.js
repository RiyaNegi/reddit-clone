import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import icon from "./icon.png";
import Posts from "../Posts";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <div className="icon">
              <img src={icon} height="50" width="50" crop="fill" />
            </div>
            <h1>Welcome to Reddit Kdrama Fan Club</h1>
          </header>
        </div>
        <Posts posts={this.state.posts} />
      </>
    );
  }

  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://www.reddit.com/r/india.json")
      .then(res => res.json())
      .then(data => {
        console.log("dataaaa:", data);
        this.setState({
          posts: data.data.children.map(child => {
            return child.data;
          })
        });
      })
      .catch(console.log);
  }
}

export default App;
