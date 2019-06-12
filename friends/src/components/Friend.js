import React from 'react';
import { Card } from 'react-bootstrap';

const Friend = props => {
  return (
    <Card className="m-5 p-4">
      <Card.Title className="pb-3">Name: {props.friend.name}</Card.Title>
      <Card.Text>Age: {props.friend.age}</Card.Text>
      <Card.Text>Email: {props.friend.email}</Card.Text>
    </Card>
  );
};

export default Friend;
