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


const connectToWallet = async () => {
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

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (



    <Container textAlign='left' >
        <Grid columns={2} relaxed='very' verticalAlign='middle'>
            <Grid.Column width={8}>
                <Header
                    as='h1'
                    content='Crypto Fantasy League'
                    inverted
                    style={{
                        fontSize: mobile ? '2em' : '3em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: mobile ? '1.5em' : '3em',
                    }}
                />
                <Header
                    as='h3'
                    content='Do It The Crypto Way'
                    inverted
                    style={{
                        fontSize: mobile ? '1em' : '1.7em',
                        fontWeight: 'normal',
                        marginTop: mobile ? '0.5em' : '1.5em',
                    }}
                />
                <Button primary size='huge'   onClick={ () => connectToWallet() }>
                    Wallet
                    <Icon name='right arrow' />
                </Button>
            </Grid.Column>
            <PaginationExampleControlled/>
        </Grid>

        <Divider vertical hidden></Divider>
    </Container>
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
                                	<Menu.Item as='a' active>Home</Menu.Item>
				</Link>

				<Link href="/PlayLeagues/">
                                	<Menu.Item as='a'>Play Leagues</Menu.Item>
				</Link>
                                                                
				<Link href="/BuyNFTs/">
                                	<Menu.Item as='a'>NFT Marketplace</Menu.Item>
				</Link>

				<Link href="/PlayerCoins/">
                                	<Menu.Item as='a'>Player Coins</Menu.Item>
				</Link>
                                        
                                <Menu.Item as='a'>About</Menu.Item>

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
                                	<Menu.Item as='a' active>Home</Menu.Item>
				</Link>

				<Link href="/PlayLeagues/">
                                	<Menu.Item as='a'>Play Leagues</Menu.Item>
				</Link>
                                                                
				<Link href="/BuyNFTs/">
                                	<Menu.Item as='a'>NFT Marketplace</Menu.Item>
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
        <Segment style={{ padding: '8em 0em' }} vertical>
            <StepsCampaignCreator />
            <StepsContributor />
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Play with friends and fans and Win in $SOL
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            CFL will be a first of a kind decentralized fantasy league which gives which gives
                            a platform to buy your favorite cricketer's / sportsperson's fantasy coins and play fantasy leagues.
            </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Own a piece of your favorite sportsman or team
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            CFL provides an NFT marketplace for fans to buy individual cricket star's 
			    NFT contents or a player coin.

            </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={8}>
                        <Image src='/Trophy.gif' size='large' circular floated='right'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "Also for artists"
            </Header>
                        <p style={{ fontSize: '1.33em' }}>there is a lovely moment in a game, create an NFT, upload it here</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "Win - Win for everyone"
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                           even player's have a share
            </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Not A Dream, It Is A Fantasy
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    You play, you earn, you own something that is limited in nature and holds a price tag
		    and a resale value
        </p>
                <Button as='a' size='large'>
                    Learn More
        </Button>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>FUTURE FEATURES</a>
                </Divider>

                <Header as='h3' style={{ fontSize: '2em' }}>
                    We are not done here
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    - Betting
		    - Sports Crypto Crowd Funding
                    - Extended to other sports

        </p>
                <Button as='a' size='large'>
                    Learn More
        </Button>
            </Container>
        </Segment>

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