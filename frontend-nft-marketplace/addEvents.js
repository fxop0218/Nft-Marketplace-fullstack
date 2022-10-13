const Moralis = require("moralis/node")
import { EvmChain } from "@moralisweb3/evm-utils"
const contractAddresses = require("./constants/networkMapping.json")
require("dotenv").config()

let chainId = process.env.CHAIN_ID || 31337
let moralisChainId = chainId == "31337" ? "1337" : chainId
const contractAddress = contractAddresses[chainId]["NftMarketplace"]
const moralisApiKey = process.env.MORALIS_API_KEY

async function main() {
    await Moralis.start({ apiKey: moralisApiKey })
    console.log(`Working with ${contractAddress}`)

    let itemListedOptions = await Moralis.EvmApi.events.ItemListed({
        nftSender,
        nftAddress,
        tokenId,
        price,
    })

    console.log(itemListedOptions.nftSender)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
