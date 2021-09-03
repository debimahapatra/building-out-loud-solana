import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const RahulChahar = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'RahulChahar' + '.png'}
        />
        <Card.Header>Rahul Chahar</Card.Header>
        <Card.Meta>Bowler Points: 9.5 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
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

export default RahulChahar