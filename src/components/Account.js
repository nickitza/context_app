import React from "react";
import { Card } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

const Account = () => (
  <AccountConsumer>
    {value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.firstName} {value.lastName}</Card.Header>
          <Card.Meta>Date Joined: {value.dateJoined}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description>Email: {value.email} </Card.Description>
          <Card.Description>Favorite Animal: {value.favoriteAnimal}</Card.Description>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
);

export default Account;
