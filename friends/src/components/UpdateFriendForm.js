import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from 'react-bootstrap';

class UpdateFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.activeFriend
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateFriend(this.state.friend);
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
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

          <button className="btn btn-primary">Update Friend</button>
        </Form>
      </div>
    );
  }
}

export default UpdateFriendForm;
