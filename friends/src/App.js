import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendsForm from './components/FriendsForm';
import UpdateFriendForm from './components/UpdateFriendForm';
import FriendsList from './components/FriendsList';
import axios from 'axios';

import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
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

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({ activeFriend: friend });
    this.props.history.push('/update-form');
  };

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, friend) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App ">
        <div className="bg-light">
          <Container className="p-5">
            <h1 className="text-primary">Lambda Friends</h1>
            <Route
              exact
              path="/"
              render={props => (
                <FriendsForm {...props} addFriend={this.addFriend} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <FriendsList
                  {...props}
                  friends={this.state.friends}
                  setUpdateForm={this.setUpdateForm}
                  deleteFriend={this.deleteFriend}
                />
              )}
            />
            <Route
              path="/update-form"
              render={props => (
                <UpdateFriendForm
                  {...props}
                  activeFriend={this.state.activeFriend}
                  updateFriend={this.updateFriend}
                />
              )}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
