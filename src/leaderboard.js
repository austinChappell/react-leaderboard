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
      dataArray: []
    }
  }

  componentWillMount() {
    // let url;
    // this.state.sortByRecent === true ? url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' : url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    // this.setState({url: url});
    console.log('STATE============', this.state);
    fetch(this.state.url).then((results) => {
      return results.json();
    }).then((dataArray) => {
      this.setState({ dataArray: dataArray })
      console.log(dataArray);
    });
  }

  handleClick = (evt) => {
    console.log('clicked');
    let sortBy = evt.target.className;
    console.log('Sort By', sortBy);
    // let dontSort;
    // if (sortBy === 'sortByAll') {
    //   this.setState({ sortByAll: true, sortByRecent: false });
    // } else {
    //   this.setState({ sortByAll: false, sortByRecent: true });
    // };

    let url;

    sortBy === 'sortByAll' ? url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime' : url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    //
    // if (sortBy === 'sortByAll') {
    //   this.setState({ url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime' });
    // } else {
    //   this.setState({ url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' });
    // }


    // sortBy === 'sortByRecent' ? dontSort = 'sortByAll' : dontSort = 'sortByRecent';
    // let updateState = {};
    // updateState[sortBy] = true;
    // updateState[dontSort] = false;
    // console.log('Update State', updateState);
    // this.setState(updateState);
    // let data;
    // let url;
    // this.state.sortByRecent === true ? url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' : url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    // this.setState({url: url});
    // this.componentWillMount();

    this.setState({ url: url }, () => {
      this.componentWillMount();
    }
  );
    // console.log('STATE============', this.state);
    // fetch(this.state.url).then((results) => {
    //   return results.json();
    // }).then((dataArray) => {
    //   this.setState({ dataArray: dataArray })
    //   console.log(dataArray);
    // });
  }

  render() {
    const recentData = this.props.recentData;

    return (
      <div id="leaderboard">
        <Title />
        <Header handleClick={this.handleClick} />
        <LeaderList recentData={recentData} sortByRecent={this.state.sortByRecent} sortByAll={this.state.sortByAll} data={this.state.dataArray} />
      </div>
    )
  }
}

export default LeaderBoard;
