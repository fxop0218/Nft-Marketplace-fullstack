const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { assert, excep } = require("chai")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Nft market tests", () => {
          let nftMarketplace, basicNft, deployer, player
          const PRICE = ethers.utils.parseEther("0.1")
          const TOKEN_ID = "0"
          beforeEach(async () => {
              accounts = await ethers.getSigners() // could also do with getNamedAccounts
              deployer = accounts[0]
              user = accounts[1]
              await deployments.fixture(["all"])
              nftMarketplaceContract = await ethers.getContract("NftMarketplace")
              nftMarketplace = nftMarketplaceContract.connect(deployer)
              basicNftContract = await ethers.getContract("BasicNft")
              basicNft = await basicNftContract.connect(deployer)
              await basicNft.mintNft()
              await basicNft.approve(nftMarketplaceContract.address, TOKEN_ID)
          })

          it("List and can be bought", async () => {
              await nftMarketplace.listItem(basicNft.address, TOKEN_ID, PRICE)
              const playerConnected = nftMarketplace.connect(player)
              await playerConnected.buyNft(basicNft.address, TOKEN_ID, { value: PRICE })
              const newOwner = await basicNft.ownerOf(TOKEN_ID)
              const deployerProceeds = await nftMarketplace.getProceeds(deployer)
              assert(newOwner.toString() == player.address)
              assert(deployerProceeds == PRICE.toString())
          })
      })
