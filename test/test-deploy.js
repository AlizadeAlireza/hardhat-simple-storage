const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
describe("SimpleStorage", function () {
    // before each one of our tests we're going deploy our
    // simple storage
    let simpleStorage, simpleStorageFactory
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        // expect
        assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "5"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        // assert
        // expect
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should match with the number that we given to it", async function () {
        const expectedName = "alireza"
        const expectedValue = "16"
        const transactionResponse = await simpleStorage.addPerson(
            expectedName,
            expectedValue
        )
        await transactionResponse.wait(1)
        // assert
        // expect
        const currentNameToNumber = await simpleStorage.nameToFavoriteNumber(
            expectedName
        )
        assert.equal(currentNameToNumber, expectedValue)
        expect(currentNameToNumber).to.equal(expectedValue)
    })
})
