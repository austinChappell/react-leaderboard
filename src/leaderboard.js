import React, { Component } from 'react';
import Title from './title';
import Header from './header';
import LeaderList from './leaderlist';

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByRecent: false,
      sortByAll: true,
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
      dataArray: [],
      allSymbol: '\u25bc',
      recentSymbol: ''
    }
  }

  changeData() {
    fetch(this.state.url).then((results) => {
      return results.json();
    }).then((dataArray) => {
      this.setState({ dataArray: dataArray })
      console.log(dataArray);
    });
  }

  componentWillMount() {
    console.log('STATE============', this.state);
    this.changeData();
  }

  handleClick = (evt) => {
    console.log(evt.target.children[0]);
    let arrowSpan = evt.target.children[0];
    // evt.target.classList.addClass('active');
    let sortBy = evt.target.className;
    console.log('Sort By', sortBy);
    let url;
    let allSymbol;
    let recentSymbol;
    sortBy === 'sortByAll' ? (url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime', allSymbol = '\u25bc', recentSymbol = '') : (url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent', allSymbol = '', recentSymbol = '\u25bc');

    this.setState({
      url: url,
      allSymbol: allSymbol,
      recentSymbol: recentSymbol
    }, () => {
      this.changeData();
    });
  }

  render() {
    const recentData = this.props.recentData;

    return (
      <div id="leaderboard">
        <Title />
        <Header handleClick={this.handleClick} recentSymbol={this.state.recentSymbol} allSymbol={this.state.allSymbol} />
        <LeaderList recentData={recentData} sortByRecent={this.state.sortByRecent} sortByAll={this.state.sortByAll} data={this.state.dataArray} />
      </div>
    )
  }
}

export default LeaderBoard;
