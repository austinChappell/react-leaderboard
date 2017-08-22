import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div>#</div>
        <div>Camper Name</div>
        <div>
          <span
            className="sortByRecent"
            // active={true}
            onClick={this.props.handleClick}>Points in the Past 30 Days <span>{this.props.recentSymbol}</span>
          </span>
        </div>
        <div>
          <span
            className="sortByAll"
            // active={false}
            onClick={this.props.handleClick}>All time points<span>{this.props.allSymbol}</span></span></div>
      </div>
    )
  }
}

export default Header;
