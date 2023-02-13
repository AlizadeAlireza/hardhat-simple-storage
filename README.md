# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


### SimpleStorage HardHat

in ether for deploying we have a lot of code.
we didn't save contract was deployed.
we didn't write any test.
sometimes we need more than one private key or rpc url.

if in importing we pulled from ethers, the package doesn't know about this contract folder.

add some code to automatically verify our code:(right after we deploy)

since our SimpleStorage doesn't have a constructor, the arguments for simple storage are just gonna be blank.
	create a function and using etherscan plugin.
	add ehterscan api key.
	
we can actually run any task from hardhat using a run package.---> etherscan



await run("verify:verify", {}), 
the first parameter is actuall parameter.
the second is subtasks.
{} --> object that contain the actual parameters.

run allows to use running any hardhat task.

catch (e) : to be any error that this section throws.
	say if this message is already verified then we're just going to
	continue.
	
	we want continuing if the verification doesn't work.

we want to only make sure se only verify if our ether scan API key exists.

we can wait for a few blocks to be mined, until we actually learnd run our verification process.

for adding like account in hardhat we can using task.
we made a folder ---> tasks and do stuff in this folder.

when we run tasks, we automatically pass our anonymous functions, the task arguments, hre -> HardHatRuntimeEvivroment

after we create our task we must add it to config.
for this example if we run it, returns a default value -> 0
but if we run that in a test net network we get true value

every time we run a script, the hardhat network is deleted.

we can run hardhat node:
	the hardhat default network is different from this locally running
	netwrok -> (hardhat node)
	
	we can add new network to our config.js
	
hardhat test work with moka framework : JavaScript Based framework

describe() is a keyword that hardhat mocha will recognize,
and take two parameters.
take a string and a function.

the function have some beforeEach() and it().

	tell us what to do before each of our it().
	so we have ton of it and have a beforeEach().
	
	it(): are going to be where we actually right the code for 
	running our test.
	
	beforEach(): some code that tell us what to do before each one of 
	these hits.

we can also actually have describes, in the describes.

we can scale our gas price in our contract:
	$ yarn add hardhat-gas-reporter --dev
	add some parameters to our config.js

can drop coinmarket key in our .env file.

solidity coverage:
	
	say we don't have any tests for this line,
	
hardhat waffle:
	is testing framework
	
	 
