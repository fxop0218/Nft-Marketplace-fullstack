const { ethers, network } = require("hardhat")
const fs = require("fs")

const frontEndContractsFile = "..\\frontend-nft-marketplace\\constants\\networkMapping.json"

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Updating frontend")
        await updateContractAddressess()
    }
}

async function updateContractAddressess() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const chainId = network.config.chainId

    //console.log(nftMarketplace.address)
    //console.log(chainId)
    const contractAddressess = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddressess) {
        if (!contractAddressess[chainId]["NftMarketplace"].includes(nftMarketplace.address)) {
            console.log("W")
            contractAddressess[chainId]["NftMarketplace"].push(nftMarketplace.address)
        } else {
            contractAddressess[chainId] = { NftMarketplace: [nftMarketplace.address] }
            console.log("2")
        }
    }
    console.log(contractAddressess)
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddressess))
    console.log("Completed")
}

module.exports.tags = ["all", "frontend"]
