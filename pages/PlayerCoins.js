/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl,
  SystemProgram,
  Keypair, 
  sendAndConfirmTransaction
} from "@solana/web3.js";


import Link from 'next/link';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
    Step,
    Pagination,
    Card,
    Popup,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})



/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
<Card.Group centered>
<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>Virat Kohli</Card.Header>
        <Card.Meta>$VK</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'VK' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>AB Develiers</Card.Header>
        <Card.Meta>$ABD</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'ABD' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>Saurav Ganguly</Card.Header>
        <Card.Meta>$DADA</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'DADA' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>Sachin Ramesh Tendulkar</Card.Header>
        <Card.Meta>$SRT</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'SRT' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>Chris Gayle</Card.Header>
        <Card.Meta>$UBOSS</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'UBOSS' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>M.S.DHONI</Card.Header>
        <Card.Meta>$MAHI</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'MAHI' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

<Card>
      <Card.Content>
        <div floated='left'> <Icon circular name='check circle' floated='left' color='blue' /> </div>
        <Card.Header>Anil Kumble</Card.Header>
        <Card.Meta>$JUMBO</Card.Meta>
        <Popup
	trigger={
	<Card.Description>          
	<u>view price charts and details</u>
        </Card.Description>
	}
	>
    	<Popup.Header>view price charts and details</Popup.Header>
    	<Popup.Content>
      		<Card>
      		<Card.Content>
        	<Image src={'/' + 'JUMBO' + '.png'} verticalAlign='middle'/>
     	 	</Card.Content>
		</Card>
       </Popup.Content>
 </Popup>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Sell
          </Button>
        </div>
      </Card.Content>
</Card>

</Card.Group>



)


HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

	connectToWallet = async () => {
	if (typeof window !== "undefined") {
	const isPhantomInstalled = window.solana && window.solana.isPhantom;
	const network = "https://api.devnet.solana.com";
	const connection = new Connection(network);				
			    if (isPhantomInstalled) {
		     			await window.solana.connect();
		      			await window.solana.on("connect", () => console.log("connected!"));
				}
			    else window.open("https://phantom.app/", "_blank");			    
		};
	};

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Media greaterThan='mobile'>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
				<Link href="/">
                                	<Menu.Item as='a'>Home</Menu.Item>
				</Link>

				<Link href="/PlayLeagues/">
                                	<Menu.Item as='a'>Play Leagues</Menu.Item>
				</Link>
                                                                
				<Link href="/BuyNFTs/">
                                	<Menu.Item as='a'>NFT Marketplace</Menu.Item>
				</Link>

				<Link href="/PlayerCoins/">
                                	<Menu.Item as='a' active>Player Coins</Menu.Item>
				</Link>
                                <Menu.Item as='a'>About</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        My Items
                  		    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}  onClick={ () => this.connectToWallet() }>
                                        Connect To Wallet
                  		    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Media>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

	connectToWallet = async () => {
	if (typeof window !== "undefined") {
	const isPhantomInstalled = window.solana && window.solana.isPhantom;
	const network = "https://api.devnet.solana.com";
	const connection = new Connection(network);				
			    if (isPhantomInstalled) {
		     			await window.solana.connect();
		      			await window.solana.on("connect", () => console.log("connected!"));
				}
			    else window.open("https://phantom.app/", "_blank");			    
		};
	};

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Media as={Sidebar.Pushable} at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
				<Link href="/">
                                	<Menu.Item as='a'>Home</Menu.Item>
				</Link>

				<Link href="/PlayLeagues/">
                                	<Menu.Item as='a'>Play Leagues</Menu.Item>
				</Link>
                                                                
				<Link href="/BuyNFTs/">
                                	<Menu.Item as='a'>NFT Marketplace</Menu.Item>
				</Link>

				<Link href="/PlayerCoins/">
                                	<Menu.Item as='a' active>Player Coins</Menu.Item>
				</Link>
                        <Menu.Item as='a'>Creater Space</Menu.Item>
                        <Menu.Item as='a'>About</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            My Items
                    			</Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={ () => this.connectToWallet() }>
                                            Wallet
                    			</Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Twitter</List.Item>
                                <List.Item as='a'>Discord</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Fantasy Leagues</List.Item>
                                <List.Item as='a'>NFT Marketplace</List.Item>
                                <List.Item as='a'>Player Coins</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                               
              </Header>
                            <p>
                                
              </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default HomepageLayout