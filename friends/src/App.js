import React, { Component } from 'react';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import axios from 'axios';

import { Container } from 'react-bootstrap';
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
      <div className="App ">
        <div className="bg-primary">
          <Container className="p-5">
            <h1 className="text-light">Lambda Friends</h1>
            <FriendsForm addFriend={this.addFriend} />
            <FriendsList friends={this.state.friends} />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
