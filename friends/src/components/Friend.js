import React from 'react';
import { Card } from 'react-bootstrap';

const Friend = props => {
  return (
    <Card className="border border-primary rounded m-5 p-4">
      <Card.Title className="pb-3">Name: {props.friend.name}</Card.Title>
      <Card.Text>Age: {props.friend.age}</Card.Text>
      <Card.Text>Email: {props.friend.email}</Card.Text>
      <button
        className="btn btn-primary"
        onClick={e => props.setUpdateForm(e, props.friend)}
      >
        Update Friend
      </button>
      <button
        className="btn btn-outline-info my-2"
        onClick={e => props.deleteFriend(e, props.friend)}
      >
        Delete Friend
      </button>
    </Card>
  );
};

export default Friend;
