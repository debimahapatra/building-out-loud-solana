import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const HardikPandya = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Hardik' + '.png'}
        />
        <Card.Header>Hardik Pandya</Card.Header>
        <Card.Meta>Allrounder Points: 10 </Card.Meta>
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

export default HardikPandya