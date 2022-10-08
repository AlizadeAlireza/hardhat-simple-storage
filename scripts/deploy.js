// imports
const { ethers, run, network } = require("hardhat")
// async main
async function main() {
    // initialize
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")
    // deploy
    const simpleStorage = await SimpleStorageFactory.deploy()
    // wait to make sure
    await simpleStorage.deployed()
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    // what happend when we deploy to our hardhat network?
    // 4 == 4, 4 == '4', 4 === "4" -> false
    // if chainId is 4 and our ehterscan apiKey exist then do stuff
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block txes...")
        await simpleStorage.deployTransaction.wait(6)

        // [] --> constructor argument
        await verify(simpleStorage.address, [])
    }
    // interacting with the contract
    const currentValue = await simpleStorage.retrieve()
    console.log(`Current Value is: ${currentValue}`)

    // Update the current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated Value is: ${updatedValue}`)

    // addPerson Function
    const transactionResponse_person = await simpleStorage.addPerson(
        "alireza",
        "16"
    )
    await transactionResponse_person.wait(1)
    const get_all = await simpleStorage.people(0)
    const get_the_number = await simpleStorage.nameToFavoriteNumber("alireza")
    console.log(`the full name and the number is : ${get_all}`)
    console.log(`the alireza's number is : ${get_the_number}`)
}

//async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}
// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
