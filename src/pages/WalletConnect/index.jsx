import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";
import {useWallet} from "@solana/wallet-adapter-react";
import {LeftChevron} from "../../assets/images";
import {ApexContainer} from "../../common/Components/StyledComponent";

import "./index.scss";
import Connected from "./connected";

export default function WalletConnect() {
	const navigate = useNavigate();
	const {wallets, select, publicKey, ready} = useWallet();

	if (publicKey && ready) return <Connected />;

	return (
		<div id="connectWallet" className="connectWallet">
			<Helmet>
				<title>APEXDUCKS || Connect to wallet</title>
			</Helmet>

			<ApexContainer>
				<div className="backButton">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="view-all">
						<LeftChevron />
						<span className="tf-button2">Back</span>
					</button>
				</div>
				<div className="content">
					<h3 className="tf-h3">Please connect your wallet</h3>
					<p className="tf-body1">
						Connect with one of our available wallet providers
					</p>
					<div className="walletCards">
						{wallets.map((wallet) => (
							<div className="card" onClick={() => select(wallet.name)}>
								<img width="40" src={wallet.icon} alt={wallet.name} />
								<h3 className="tf-h3">{wallet.name}</h3>
							</div>
						))}
					</div>
				</div>
			</ApexContainer>
		</div>
	);
}
