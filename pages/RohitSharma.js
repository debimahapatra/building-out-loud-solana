import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const RohitSharma = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'RohitSharma' + '.png'}
        />
        <Card.Header>Rohit Sharma</Card.Header>
        <Card.Meta>Batsman Points: 11 </Card.Meta>
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

export default RohitSharma