import React from "react";
import { Card, Grid, Image } from "semantic-ui-react"

export default function EpisodeCard(props) {
  return(
    <Grid.Column>
        <Card>
        <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Card.Meta>
                  id: {props.id}
                </Card.Meta>
                <Card.Description>
                  Created: {props.created}
                  </Card.Description>
                  <Card.Description>
                  Air Date: {props.air}
                  </Card.Description>
                <Card.Description>
                  More Details: <a href={props.url}>Click Here</a>
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
    )
}
