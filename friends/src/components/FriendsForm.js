import React, { Component } from 'react';

class FriendsForm extends Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChanges = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  // addFriend = event => {
  //   event.preventDefault();
  //   this.props.addFriend(this.state.friend);
  //   this.setState({
  //     friend: {
  //       name: '',
  //       age: null,
  //       email: ''
  //     }
  //   });
  // };

  render() {
    return (
      <div>
        <form onSubmit={() => this.addFriend}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={this.handleChanges}
              value={this.state.friend.name}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              onChange={this.handleChanges}
              value={this.state.friend.age}
              name="age"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChanges}
              value={this.state.friend.email}
              name="email"
            />
          </div>

          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
