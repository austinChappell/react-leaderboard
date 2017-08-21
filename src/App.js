import React, { Component } from 'react';
import LeaderBoard from './leaderboard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LeaderBoard name="Something"/>
    )
  }
}

export default App;
