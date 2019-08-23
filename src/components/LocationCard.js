import React from "react";
import { Card, Grid } from "semantic-ui-react"

export default function LocationCard({ name, type, dimension, residents, id }) {
  return(
    <Grid.Column>
        <Card className='cards'>
        {/* <Image src={props.image} wrapped ui={false} /> */}
            <Card.Content>
                <Card.Header>
                  {name}
                </Card.Header>
                <Card.Meta>
                  id: {id}
                </Card.Meta>
                <Card.Description>
                  Type: {type}
                </Card.Description>
                <Card.Description>
                  Dimension: {dimension}
                </Card.Description>
                <Card.Description>
                  Residents: {residents}
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
    )
}
