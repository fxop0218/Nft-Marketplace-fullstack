import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="m-4 text-3xl font-bold">NFT </h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="m-4 font-semibold">NFT Marketplace</a>
                </Link>
                <Link href="/sell-nft" className="m-8">
                    <a className="m-4 font-semibold">Sell</a>
                </Link>
                <ConnectButton moralisAuth={false1} />
            </div>
        </nav>
    )
}
