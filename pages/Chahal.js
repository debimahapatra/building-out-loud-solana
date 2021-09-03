import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Chahal = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Chahal' + '.png'}
        />
        <Card.Header>Yuzvendra Chahal</Card.Header>
        <Card.Meta>Bowler Points: 10 </Card.Meta>
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

export default Chahal