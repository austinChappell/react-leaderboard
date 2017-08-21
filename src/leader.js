import React, { Component } from 'react';

class Leader extends Component {
  render() {
    return (
      <div className="leader">
        <div className="rank">{this.props.rank}</div>
        <div className="name">{this.props.name}</div>
        <div className="thirty-days">{this.props.thirtyDays}</div>
        <div className="all-time">{this.props.allTime}</div>
      </div>
    )
  }
}

export default Leader;
