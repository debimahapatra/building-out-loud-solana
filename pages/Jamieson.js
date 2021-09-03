import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Jamieson = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Jamieson' + '.png'}
        />
        <Card.Header>Kyle Jamieson</Card.Header>
        <Card.Meta>Bowler Points: 9 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>



)

export default Jamieson