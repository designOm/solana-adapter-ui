import { Popover } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Images, WalletIcon } from "../../../assets/images";
import useNotification from "../../Hooks/useNotification";
import { selectWallet } from "../../redux/features/user/userSlice";
import { StyledButton } from "../StyledComponent";

const WalletButton = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { wallets, select } = useWallet();

	const open = Boolean(anchorEl);
	const location = useLocation();

	useEffect(() => setAnchorEl(null), [location]);

	//! Handling click on wallet
	const handleWalletClick = useCallback(
		(name) => {
			select(name);
			setAnchorEl(null);
		},
		[select]
	);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
			<StyledButton
				id="walletConnect-button"
				aria-controls="walletConnect-menu"
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				type="button">
				<WalletIcon />
			</StyledButton>
			<Popover
				id="walletConnect-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: -18,
					horizontal: "left",
				}}
				PaperProps={{
					sx: {
						background: "transparent",
						borderRadius: 0,
					},
					className: "browseSubmenu",
				}}>
				<div className="browseSubmenu__base">
					{wallets.map((wallet) => (
						<div
							className="browseSubmenu__item tf-button2"
							key={wallet.name}
							onClick={(e) => handleWalletClick(wallet.name)}>
							<img width={20} src={wallet.icon} alt="I" /> {wallet.name}
						</div>
					))}
				</div>
			</Popover>
		</React.Fragment>
	);
};

export const ButtonAfterWalletConnect = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { wallet, disconnect } = useWallet();
	const { addSuccess } = useNotification();

	const userWallet = useSelector(selectWallet);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	//! handle copy wallet Address
	const handleCopyWalletAddress = useCallback(() => {
		navigator.clipboard.writeText(userWallet.walletAddress);
		addSuccess(
			`Wallet address ${userWallet.walletAddress?.slice(0, 4) +
			".." +
			userWallet.walletAddress?.slice(-4)
			} added to clipboard successfully.`,
			"Address copied."
		);
		setAnchorEl(null);
	}, [addSuccess, userWallet]);

	//! handle copy wallet Address
	const handleWalletDisconnect = useCallback(() => {
		disconnect().catch((e) => {
			// Silently catch because any errors are caught by the context `onError` handler
		});
		setAnchorEl(null);
	}, [disconnect]);

	return (
		<>
			<StyledButton
				id="walletOptions-button"
				aria-controls="walletOptions-menu"
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				className="forWalletIcon"
				type="button">
				<img width="18" src={wallet?.icon} alt={wallet?.name} />
			</StyledButton>
			<Popover
				id="walletOptions-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: -18,
					horizontal: "left",
				}}
				PaperProps={{
					sx: {
						background: "transparent",
						borderRadius: 0,
					},
					className: "browseSubmenu",
				}}>
				<div className="browseSubmenu__base">
					<div
						className="browseSubmenu__item tf-button2"
						onClick={handleCopyWalletAddress}>
						<img width={20} src={Images.CopyIcon} alt="I" /> Copy Address
					</div>
					<div
						className="browseSubmenu__item tf-button2"
						onClick={handleWalletDisconnect}>
						<img width={20} src={Images.WalletDisconnectIcon} alt="I" />{" "}
						Disconnect
					</div>
				</div>
			</Popover>
		</>
	);
};

export default WalletButton;
