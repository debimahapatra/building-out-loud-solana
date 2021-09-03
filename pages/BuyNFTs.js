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
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})


class PaginationExampleControlled extends Component {
    constructor({ mobile}) {
        super();
        this.state = { activePage: 1, pic: '/1.png', mobile: mobile };
    }

    handlePaginationChange = (e, { activePage }) => {
        this.setState({ activePage });
        this.setState({ pic: '/' + this.state.activePage + '.png' });
    };

    render() {
        return(
            <Grid.Column width={8} verticalAlign='middle'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container width={8}>
                    <Image src={'/' + 'CFL3' + '.gif'} size='huge' circular verticalAlign='middle' spaced />
                </ Container >
                <br></br>
                <br></br>
                <br></br>
                <Container textAlign='center' >
                    <Pagination
                        boundaryRange={5}
                        defaultActivePage={this.state.activePage}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={5}
                        onPageChange={this.handlePaginationChange}
                    />
                </Container >
            </Grid.Column>
        )
    }
}

const StepsCampaignCreator = () => (
    <Step.Group widths={4}>
        <Step active width={8}>

<div class="ui card">
  <a class="image" href="#">
    <Image src={'/' + 'RCB-VS-MI' + '.png'} circular verticalAlign='middle'/>
  </a>
  <div class="content">
    <a class="header" href="#">select a match</a>
    <div class="meta">
      <a>choose a game that you want to play</a>
    </div>
  </div>
</div>
        </Step>

        <Step active width={8}>

<div class="ui card">
  <a class="image" href="#">
    <Image src={'/' + 'CreateTeam' + '.png'} circular verticalAlign='middle'/>
  </a>
  <div class="content">
    <a class="header" href="#">create a team</a>
    <div class="meta">
      <a>pick players and build team</a>
    </div>
  </div>
</div>
        </Step>

        <Step active width={8}>
<div class="ui card">
  <a class="image" href="#">
    <Image src={'/' + 'Win' + '.png'} circular verticalAlign='middle'/>
  </a>
  <div class="content">
    <a class="header" href="#">join a challenge</a>
    <div class="meta">
      <a>select a challenge and win $SOL</a>
    </div>
  </div>
</div>
        </Step>


    </Step.Group>

)

const StepsContributor = () => (
    < Step.Group widths={4}>
        <Step active width={8}>
<div class="ui card">
  <a class="image" href="#">
    <Image src={'/' + 'WhatIsPlayerCoin' + '.png'} circular verticalAlign='middle'/>
  </a>
  <div class="content">
    <a class="header" href="#">Player Coin</a>
    <div class="meta">
      <a>powered by solana</a>
    </div>
  </div>
</div>
        </Step>

        <Step active width={8}>
<div class="ui card">
  <a class="image" href="#">
    <Image src={'/' + 'PlayCoinDesc' + '.png'} circular verticalAlign='middle'/>
  </a>
  <div class="content">
    <a class="header" href="#">What is a player coin?</a>
    <div class="meta">
      <a>powered by solana</a>
    </div>
  </div>
</div>
        </Step>

        <Step active width={8}>
<div class="ui card">
  <a class="image" href="#">
    <Image src={'/' + 'NFTMarketPlace' + '.png'} circular verticalAlign='middle'/>
  </a>
  <div class="content">
    <a class="header" href="#">NFT Marketplace</a>
    <div class="meta">
      <a>powered by solana</a>
    </div>
  </div>
</div>
        </Step>


    </Step.Group >
)

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
<Card.Group centered>
    <Card>
    <Image src={'/' + '2011WinningMoment' + '.png'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>2011 Winning Moment</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Rajendra Jagamutu</span>
      </Card.Meta>
      <Card.Description>
        Price: 11.3 SOL
      </Card.Description>
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
    <Image src={'/' + 'ClassOf83' + '.png'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>Class Of 83</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Rajendra Jagamutu</span>
      </Card.Meta>
      <Card.Description>
        Price: 15.3 SOL
      </Card.Description>
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
    <Image src={'/' + 'NeverFollowOnAnimated' + '.png'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>2001 The Wall and Very Very Special</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Rajendra Jagamutu</span>
      </Card.Meta>
      <Card.Description>
        Price: 7.3 SOL
      </Card.Description>
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
    <Image src={'/' + '1986AudiMoment' + '.png'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>1986 When The Nation Won The Audi</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Vijendra Singh</span>
      </Card.Meta>
      <Card.Description>
        Price: 10.3 SOL
      </Card.Description>
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
    <Image src={'/' + '11vs1' + '.png'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>Eleven VS One</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Chudkeswar Khurmi</span>
      </Card.Meta>
      <Card.Description>
        Price: 1.7 SOL
      </Card.Description>
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
    <Image src={'/' + 'Beamer1' + '.png'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>Two Beamers, you are out</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Murugesan Singh</span>
      </Card.Meta>
      <Card.Description>
        Price: 1.3 SOL
      </Card.Description>
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
    <Image src={'/' + 'Bouncergif' + '.gif'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>Lethal Bouncer</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: Rajendra Jagamutu</span>
      </Card.Meta>
      <Card.Description>
        Price: 1.3 SOL
      </Card.Description>
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
    <Image src={'/' + 'Trophy' + '.gif'} circular verticalAlign='middle'/>
    <Card.Content>
      <Card.Header>CFL 2021</Card.Header>
      <Card.Meta>
        <span className='date'>Artist: DPM</span>
      </Card.Meta>
      <Card.Description>
        Price: 1.8 SOL
      </Card.Description>
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
                                	<Menu.Item as='a' active>NFT Marketplace</Menu.Item>
				</Link>

				<Link href="/PlayerCoins/">
                                	<Menu.Item as='a'>Player Coins</Menu.Item>
				</Link>
                                <Menu.Item as='a'>About</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        My Items
                  		    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}   onClick={ () => this.connectToWallet() }>
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
                                	<Menu.Item as='a' active>NFT Marketplace</Menu.Item>
				</Link>

				<Link href="/PlayerCoins/">
                                	<Menu.Item as='a'>Player Coins</Menu.Item>
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

                                        <Button as='a' inverted style={{ marginLeft: '0.8em' }}  onClick={ () => this.connectToWallet() }>
                                            Connect To Wallet 
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