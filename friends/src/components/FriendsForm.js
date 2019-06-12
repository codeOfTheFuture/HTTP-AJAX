import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from 'react-bootstrap';

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
        <Form
          onSubmit={() => this.addFriend}
          className="my-5 p-5 bg-light border border-primary rounded"
        >
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormControl
              type="text"
              id="name"
              placeholder="Name"
              onChange={this.handleChanges}
              value={this.state.friend.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="age">Age</FormLabel>
            <FormControl
              type="number"
              id="age"
              placeholder="Age"
              onChange={this.handleChanges}
              value={this.state.friend.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl
              type="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChanges}
              value={this.state.friend.email}
              name="email"
            />
          </FormGroup>

          <Button variant="outline-primary" type="submit">
            Add Friend
          </Button>
        </Form>
      </div>
    );
  }
}

export default FriendsForm;
