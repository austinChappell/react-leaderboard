import React, { Component } from 'react';
import Leader from './leader';

class LeaderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentData: [],
      url: this.props.url
    }
  }

  render() {

    return (
      <div>
        {this.props.data.map((leader, index) => {
          return <Leader key={index} rank={index + 1} name={leader.username} thirtyDays={leader.recent} allTime={leader.alltime} />
        })}

      </div>
    )
  }
}

export default LeaderList;
