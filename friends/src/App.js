import React, { Component } from 'react';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // addFriend = friend => {
  //   axios
  //     .post('http://localhost:5000/friends', {
  //       ...friend
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <FriendsForm addFriend={this.addFriend} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
