import React, { Component } from "react";
import "./App.css";

import Articles from "./components/Articles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
    };
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="App">
        <div className="navigation">
          <button
            onClick={() => this.setState({ filter: 0 })}
            data-testid="top-link"
          >
            Top
          </button>
          <button
            onClick={() => this.setState({ filter: 1 })}
            data-testid="newest-link"
          >
            Newest
          </button>
        </div>
        <Articles filter={this.state.filter} articles={articles} />
      </div>
    );
  }
}

export default App;
