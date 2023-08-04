<div align="center">
    
![fav](https://github.com/Harshit-Raj-14/ElectifyU/assets/98808802/c71a52ba-17e7-45a8-9971-e80935c0f416)

  </div>


  <h2 align="center">ElectifyU </h2>
  <h3 align="center">Empowering Democracy at the University Campus</h3>

  <h4 align="center">
    Blockchain Based e-Voting System
    <br />
  </h4> 
</div>

## Tech Stack
Latest tech stack used - 

Frontend - React.js, Taiwind CSS, ether.js

Backend - Node.js, Express.js, Solidity, Ethereum

## Getting Started

Clone the repo
> https://github.com/Harshit-Raj-14/ElectifyU.git

Downloading Packages

> npm install

Deploying the smartcontract

> npx hardhat compile

> npx hardhat run --network mantle-testnet scripts/deploy.js

The smartcontract deployment address you recieved copy it.

Make a .env in project similar to .env.example.

Paste your secret private key.

Also, add the contract adress you got after deploying.

The contract address also needs to be added in main.js file on line 2.


Running the localhost:3000
>node index.js
