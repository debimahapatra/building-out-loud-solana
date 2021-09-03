import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const KrunalPandya = () => (

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Krunal' + '.png'}
        />
        <Card.Header>Krunal Pandya</Card.Header>
        <Card.Meta>Allrounder Points: 9 </Card.Meta>
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

export default KrunalPandya