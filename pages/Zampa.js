import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Zampa = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Zampa' + '.png'}
        />
        <Card.Header>Adam Zampa</Card.Header>
        <Card.Meta>Bowler Points: 9.5 </Card.Meta>
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

export default Zampa