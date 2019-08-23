import React from "react";
import { Card, Grid, Image } from "semantic-ui-react"

export default function CharacterCard(props) {
  return(
    <Grid.Column>
        <Card className='cards'>
        <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Card.Meta>
                  id: {props.id}
                </Card.Meta>
                <Card.Description>
                  Species: {props.species}
                  </Card.Description>
                  <Card.Description>
                  Gender: {props.gender}
                  </Card.Description>
                  <Card.Description>
                  Status: {props.status}
                </Card.Description>
                <Card.Description>
                  More Details: <a href={props.url}>{props.url}</a>
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
    )
}
