/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component,useState } from 'react';
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

import ViratKohli from './ViratKohli';
import ABD from './ABD';
import Devdutt from './Devdutt';
import Maxwell from './Maxwell';
import Sundar from './Sundar';
import Christian from './Christian';
import Saini from './Saini';
import Jamieson from './Jamieson';
import Chahal from './Chahal';
import Zampa from './Zampa';
import Siraj from './Siraj';

import DeKock from './DeKock';
import Pollard from './Pollard';
import SKY from './SKY';
import KrunalPandya from './KrunalPandya';
import RahulChahar from './RahulChahar';
import HardikPandya from './HardikPandya';
import SaurabhTiwary from './SaurabhTiwary';
import Chawla from './Chawla';
import Boult from './Boult';
import Bumrah from './Bumrah';
import RohitSharma from './RohitSharma';


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
class HomepageHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputTag: '',
      playerList: [],
      finalTag: '',
      teamPreviewGridButtonTag: 	<div>

          <Button basic color='green' onClick={ () => this.connectToWallet() }>
            Connect To Wallet
          </Button>


          <Button basic color='blue' onClick={ () => this.openChallenges() }>
            Show Challenges
          </Button>

	</div>,
    }
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

	
  addItem = async (inp) => {
    await this.setState({
      inputValue: inp,
    });


   if (this.state.inputValue == 'ViratKohli') {
	await this.setState({inputTag: <ViratKohli/>,});
   }
   else if (this.state.inputValue == 'ABD') {
	await this.setState({inputTag: <ABD/>,});
   } 
   else if (this.state.inputValue == 'Devdutt') {
	await this.setState({inputTag: <Devdutt/>,});
   }  
   else if (this.state.inputValue == 'Maxwell') {
	await this.setState({inputTag: <Maxwell/>,});
   } 
   else if (this.state.inputValue == 'Sundar') {
	await this.setState({inputTag: <Sundar/>,});
   } 
   else if (this.state.inputValue == 'Christian') {
	await this.setState({inputTag: <Christian/>,});
   } 
   else if (this.state.inputValue == 'Saini') {
	await this.setState({inputTag: <Saini/>,});
   } 
   else if (this.state.inputValue == 'Jamieson') {
	await this.setState({inputTag: <Jamieson/>,});
   }
   else if (this.state.inputValue == 'Chahal') {
	await this.setState({inputTag: <Chahal/>,});
   }
   else if (this.state.inputValue == 'Zampa') {
	await this.setState({inputTag: <Zampa/>,});
   }
   else if (this.state.inputValue == 'Siraj') {
	await this.setState({inputTag: <Siraj/>,});
   }

   else if (this.state.inputValue == 'DeKock') {
	await this.setState({inputTag: <DeKock/>,});
   } 
   else if (this.state.inputValue == 'Pollard') {
	await this.setState({inputTag: <Pollard/>,});
   }  
   else if (this.state.inputValue == 'SKY') {
	await this.setState({inputTag: <SKY/>,});
   } 
   else if (this.state.inputValue == 'KrunalPandya') {
	await this.setState({inputTag: <KrunalPandya/>,});
   } 
   else if (this.state.inputValue == 'RahulChahar') {
	await this.setState({inputTag: <RahulChahar/>,});
   } 
   else if (this.state.inputValue == 'HardikPandya') {
	await this.setState({inputTag: <HardikPandya/>,});
   } 
   else if (this.state.inputValue == 'SaurabhTiwary') {
	await this.setState({inputTag: <SaurabhTiwary/>,});
   }
   else if (this.state.inputValue == 'Chawla') {
	await this.setState({inputTag: <Chawla/>,});
   }
   else if (this.state.inputValue == 'Boult') {
	await this.setState({inputTag: <Boult/>,});
   }
   else if (this.state.inputValue == 'Bumrah') {
	await this.setState({inputTag: <Bumrah/>,});
   }
   else if (this.state.inputValue == 'RohitSharma') {
	await this.setState({inputTag: <RohitSharma/>,});
   }

   let playerList = this.state.playerList;
   playerList.push(this.state.inputTag);

   await this.setState({
      playerList
   });
  };


NotConnectedTag = () => (


	<div>

          <Button basic color='green' onClick={ () => this.connectToWallet() }>
            Connect To Wallet
          </Button>


          <Button basic color='blue' onClick={ () => this.openChallenges() }>
            Show Challenges
          </Button>

	</div>


)

NonAdminLogin = () => (


<div>
          <Button basic color='green' onClick={ () => this.connectToWallet() }>
            Connect To Wallet
          </Button>

          <Button basic color='blue' onClick={ () => this.onSubmit() }>
            Join 1 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.onSubmit() }>
            Join 2 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.onSubmit() }>
            Join 3 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.onSubmit() }>
            Close Challenge
          </Button>
</div>

)

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


openChallenges = async () => {
	await window.solana.connect();
	await window.solana.on("connect", () => console.log("connected!"));
	if (window.solana.isConnected) {
		if(window.solana.publicKey.toString() != "G9WFWbEZ6wRrpS5kop4DzbPwyqBUy1JXKBFKc5od4LFP") {
			
			   await this.setState({
      				teamPreviewGridButtonTag: <div>

          <Button basic color='blue' onClick={ () => this.onSubmit("1000000000") }>
            Join 1 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.onSubmit("2000000000") }>
            Join 2 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.onSubmit("3000000000") }>
            Join 3 SOL Challenge
          </Button>

</div>	,
   			   });

		};	

		if(window.solana.publicKey.toString() == "G9WFWbEZ6wRrpS5kop4DzbPwyqBUy1JXKBFKc5od4LFP") {
			
			   await this.setState({
      				teamPreviewGridButtonTag: <div>

          <Button basic color='blue' onClick={ () => this.declareResult("1000000000") }>
            Close 1 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.declareResult("2000000000") }>
            Close 2 SOL Challenge
          </Button>

          <Button basic color='blue' onClick={ () => this.declareResult("3000000000") }>
            Close 3 SOL Challenge
          </Button>

</div>	,
   			   });

		};	

   	}

}

declareResult = async (amt) => {	
	if (typeof window !== "undefined") {
	const isPhantomInstalled = window.solana && window.solana.isPhantom;
	const network = "https://api.devnet.solana.com";
	const connection = new Connection(network);
		if ("solana" in window) {
			    const provider = window.solana;
			    console.log(provider);
			    if (provider.isPhantom) {
		     		await window.solana.connect();
		      		await window.solana.on("connect", () => console.log("connected!"));
   		   		await console.log("is phantom installed: ", isPhantomInstalled);
      				await console.log("this is the publickey: ", window.solana.publicKey.toString());
      				await console.log("is it auto approved: ", window.solana.autoApprove);
				const fromPubKey = new PublicKey(window.solana.publicKey.toString());
				const toPubKey = new PublicKey("FJDSHim3VBM5PEq9hkwRhBxJ4fMx8wTV4KYo9t7Q2Hk6");
				const amountNumber = parseFloat(amt * 2);
				const instructions = SystemProgram.transfer({
				      fromPubkey: fromPubKey,
				      toPubkey: toPubKey,
				      lamports: amountNumber,
				});

				let abc = await connection.getRecentBlockhash();
				let transaction = new Transaction().add(instructions);
				transaction.recentBlockhash = abc.blockhash;
				transaction.feePayer = window.solana.publicKey;
				let signed = await window.solana.signTransaction(transaction);
				let signature = await connection.sendRawTransaction(signed.serialize());
				let confirm = await connection.confirmTransaction(signature);			
		}
	}
}
}

onSubmit = async (amt) => {
if (typeof window !== "undefined") {
  // We are in the browser and metamask is running.
const isPhantomInstalled = window.solana && window.solana.isPhantom;
const network = "https://api.devnet.solana.com";
const connection = new Connection(network);


  if ("solana" in window) {
    const provider = window.solana;
    console.log(provider);
	    if (provider.isPhantom) {
      		await window.solana.connect();
      		await window.solana.on("connect", () => console.log("connected!"));
      		await console.log("is phantom installed: ", isPhantomInstalled);
      		await console.log("this is the publickey: ", window.solana.publicKey.toString());
      		await console.log("is it auto approved: ", window.solana.autoApprove);
		const fromPubKey = new PublicKey(window.solana.publicKey.toString());
		const toPubKey = new PublicKey("G9WFWbEZ6wRrpS5kop4DzbPwyqBUy1JXKBFKc5od4LFP");
		const amountNumber = parseFloat(amt);

const instructions = SystemProgram.transfer({
      fromPubkey: fromPubKey,
      toPubkey: toPubKey,
      lamports: amountNumber,
    });

let abc = await connection.getRecentBlockhash();
let transaction = new Transaction().add(instructions);
transaction.recentBlockhash = abc.blockhash;
transaction.feePayer = window.solana.publicKey;
let signed = await window.solana.signTransaction(transaction);
let signature = await connection.sendRawTransaction(signed.serialize());
let confirm = await connection.confirmTransaction(signature);
	    }
  }

}
}



render() {
return (
<Grid celled>

<Grid.Row>

<Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Royal Challengers Bangalore'
                    inverted
                />
</Grid.Column>

<Grid.Column width={8}>
                <Header
                    as='h4'
                    content='Team Preview'
                    inverted
                />

{this.state.teamPreviewGridButtonTag}

</Grid.Column>

<Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Mumbai Indians'
                    inverted
                />
</Grid.Column>

</Grid.Row>

<Grid.Row>
<Grid.Column width={5}>
<Card.Group>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'ViratKohli' + '.png'}
        />
        <Card.Header>Virat Kohli</Card.Header>
        <Card.Meta>Batsman Points: 10 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('ViratKohli') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'ABD-profile' + '.png'}
        />
        <Card.Header>AB De Villiers</Card.Header>
        <Card.Meta>Batsman Points: 12 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('ABD') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Padikal' + '.png'}
        />
        <Card.Header>Devdutt Padikkal</Card.Header>
        <Card.Meta>Batsman Points: 9 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Devdutt') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Maxwell' + '.png'}
        />
        <Card.Header>Glenn Maxwell</Card.Header>
        <Card.Meta>Allrounder Points: 9.5 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Maxwell') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Washington' + '.png'}
        />
        <Card.Header>Washington Sundar</Card.Header>
        <Card.Meta>Allrounder Points: 8.5 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Sundar') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'DaneChristian' + '.png'}
        />
        <Card.Header>Dane Christian</Card.Header>
        <Card.Meta>Allrounder Points: 8.5 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Christian') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Saini' + '.png'}
        />
        <Card.Header>Navdeep Saini</Card.Header>
        <Card.Meta>Bowler Points: 9 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Saini') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Jamieson' + '.png'}
        />
        <Card.Header>Kyle Jamieson</Card.Header>
        <Card.Meta>Bowler Points: 9 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Jamieson') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

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
          <Button basic color='green' onClick={ () => this.addItem('Chahal') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

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
          <Button basic color='green' onClick={ () => this.addItem('Zampa') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Siraj' + '.png'}
        />
        <Card.Header>MD Siraj</Card.Header>
        <Card.Meta>Bowler Points: 8.5 </Card.Meta>
        <Card.Description>
          <strong>Royal Challengers Bangalore</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Siraj') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

</Card.Group>
</Grid.Column>

<Grid.Column width={6}>
<Card.Group>
      {
        this.state.playerList.map((val, index) => {
          return (
            <Card key={index}>
              { val }
            </Card>
          );
        })
      }

</Card.Group>
</Grid.Column>

<Grid.Column width={5}>

<Card.Group>

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
          <Button basic color='green' onClick={ () => this.addItem('RohitSharma') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'DeKock' + '.png'}
        />
        <Card.Header>Quinton DeKock</Card.Header>
        <Card.Meta>Batsman Points: 9 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('DeKock') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Pollard' + '.png'}
        />
        <Card.Header>Kirron Pollard</Card.Header>
        <Card.Meta>Allrounder Points: 9.5 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Pollard') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'SKY' + '.png'}
        />
        <Card.Header>Surya Kumar Yadav</Card.Header>
        <Card.Meta>Batsman Points: 9.5 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('SKY') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Krunal' + '.png'}
        />
        <Card.Header>Krunal Pandya</Card.Header>
        <Card.Meta>Batsman Points: 9.5 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('KrunalPandya') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

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
          <Button basic color='green' onClick={ () => this.addItem('RahulChahar') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

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
          <Button basic color='green' onClick={ () => this.addItem('HardikPandya') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'SouravTiwary' + '.png'}
        />
        <Card.Header>Sourabh Tiwary</Card.Header>
        <Card.Meta>Batsman Points: 8.5 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('SaurabhTiwary') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'PiyushChawla' + '.png'}
        />
        <Card.Header>Piyush Chawla</Card.Header>
        <Card.Meta>Bowler Points: 9 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Chawla') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Boult' + '.png'}
        />
        <Card.Header>Trent Boult</Card.Header>
        <Card.Meta>Bowler Points: 9.5 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Boult') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={'/' + 'Bumrah' + '.png'}
        />
        <Card.Header>Jasprit Bumrah</Card.Header>
        <Card.Meta>Bowler Points: 11 </Card.Meta>
        <Card.Description>
          <strong>Mumbai Indians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={ () => this.addItem('Bumrah') }>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>

</Card.Group>

</Grid.Column>

</Grid.Row>
</Grid>


    );
  }
} 


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
                                	<Menu.Item as='a'>Home</Menu.Item>
				</Link>

				<Link href="/PlayLeagues/">
                                	<Menu.Item as='a' active>Play Leagues</Menu.Item>
				</Link>
                                                                
				<Link href="/BuyNFTs/">
                                	<Menu.Item as='a'>NFT Marketplace</Menu.Item>
				</Link>

				<Link href="/PlayerCoins/">
                                	<Menu.Item as='a'>Player Coins</Menu.Item>
				</Link>
                                        
                                <Menu.Item as='a'>About</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Rules
                  </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Wallet
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

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });


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
                                	<Menu.Item as='a' active>Play Leagues</Menu.Item>
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