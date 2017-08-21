import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div>#</div>
        <div>Camper Name</div>
        <div><span className="sortByRecent" onClick={this.props.handleClick}>Points in the Past 30 Days</span></div>
        <div><span className="sortByAll" onClick={this.props.handleClick}>All time points</span></div>
      </div>
    )
  }
}

export default Header;
