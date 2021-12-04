import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
	ConnectionProvider,
	useWallet,
	WalletProvider
} from "@solana/wallet-adapter-react";
import {
	getPhantomWallet,
	getSolletExtensionWallet,
	getSolletWallet
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "underscore";
import useAuth from "../../Hooks/useAuth";
import useNotification from "../../Hooks/useNotification";
import { addWallet, disconnectWallet, removeUserData, removeUserToken } from "../../redux/features/user/userSlice";

const WalletAdapterProvider = React.memo(({ children }) => {
	// const network = WalletAdapterNetwork.Devnet;
	let network;
	if (process.env.REACT_APP_NET_NAME === "DEVNET") {
		network = WalletAdapterNetwork.Devnet;
	} else if (process.env.REACT_APP_NET_NAME === "TESTNET") {
		network = WalletAdapterNetwork.Testnet;
	} else if (process.env.REACT_APP_NET_NAME === "MAINNET") {
		network = WalletAdapterNetwork.Mainnet;
	}
	const endpoint = clusterApiUrl(network);

	const wallets = useMemo(
		() => [
			getPhantomWallet(),
			getSolletWallet({ network }),
			getSolletExtensionWallet({ network }),
		],
		[network]
	);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletActionHandlers />
				{children}
			</WalletProvider>
		</ConnectionProvider>
	);
});

const WalletActionHandlers = React.memo(() => {
	const { adapter, wallet, publicKey, wallets } = useWallet();
	const { addSuccess, addWarning, addError } = useNotification();
	const { signUp , authToken } = useAuth();

	const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
	const dispatch = useDispatch();

	//! after wallet disconnection
	const handleDisconnect = useCallback(
		(log) => {
			dispatch(disconnectWallet());
			dispatch(removeUserData()); dispatch(removeUserToken())
			localStorage.removeItem("walletName");
			localStorage.removeItem("userData");
			sessionStorage.removeItem("wallet")
			addWarning("Wallet is now disconnected!", "Disconnect Wallet!");
			console.log(log);
		},
		[dispatch, addWarning]
	);

	//!  After wallet connected Action
	const afterWalletConnected = useCallback(async () => {
		let payload = {};

		payload = {
			walletAddress: base58,
			data: {
				name: wallet.name,
				icon: wallet.icon,
				url: wallet.url,
			},
		};

		// Storing wallet details
		sessionStorage.setItem("wallet", JSON.stringify(payload));
		dispatch(addWallet(payload));

		//! get user of wallets
		if(!authToken)
			await signUp({ walletAddress: base58, publicKey: publicKey.toString() });

		addSuccess(
			`${wallet.name} wallet connected successfully.`,
			"Wallet Connected!"
		);
	}, [addSuccess, wallet, dispatch, base58, signUp, publicKey]);

	useEffect(() => {
		if (base58) afterWalletConnected();
	}, [base58, afterWalletConnected]);

	//! handling Error
	const onError = useCallback(
		(error) => {
			if (
				[
					"WalletNotFoundError",
					"WalletNotInstalledError",
					"WalletNotReadyError",
				].includes(error.name)
			) {
				const name = localStorage.getItem("walletName");
				let wallet = {};
				if (!isEmpty(name)) wallet = wallets.find((d) => d.name === name);

				addWarning(
					`Please install and initialize ${wallet.name} wallet extension first,`,
					"Wallet is not installed !"
				);
			} else {
				addError(
					error.message ? `${error.name}: ${error.message}` : error.name
				);
				console.log(error);
			}
		},
		[addError, addWarning, wallets]
	);

	useEffect(() => {
		if (adapter) {
			adapter.on("disconnect", handleDisconnect);
			adapter.on("error", onError);
			return () => {
				adapter.off("disconnect", handleDisconnect);
				adapter.off("error", onError);
			};
		}
	}, [adapter, handleDisconnect, onError]);
	return <></>;
});

export default WalletAdapterProvider;
