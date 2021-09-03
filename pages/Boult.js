import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Boult = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Boult' + '.png'}
        />
        <Card.Header>Trent Boult</Card.Header>
        <Card.Meta>Batsman Points: 9.5 </Card.Meta>
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

export default Boult