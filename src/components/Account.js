import React from "react";
import { Card, } from 'semantic-ui-react'

const Account = () => (
  <>
    <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date Joined: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        Email: email 
      </Card.Description>
      <Card.Description>
        Favorite Animal: favoriteAnimal
      </Card.Description>
    </Card.Content>
  </Card>
  </>
)

export default Account