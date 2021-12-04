import { Paper, Popover } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	ApexHubLogo, DarkModeIcon,
	DayLightIcon, UserIcon
} from "../../../assets/images";
import { routePaths } from "../../../Routes/paths";
import useAuth from "../../Hooks/useAuth";
import useApexTheme from "../../Hooks/useTheme";
import { selectWallet } from "../../redux/features/user/userSlice";
import {
	ApexContainer,
	StyledButton
} from "../StyledComponent";
import "./index.scss";
import WalletButton, { ButtonAfterWalletConnect } from "./WalletButton";

export default function Header({ isApexHubHeader, isAdminHeader }) {
	const {
		colorPlates,
		defaultLightColors,
		changeColorMode,
		colorMode,
		defaultDarkColors,
	} = useApexTheme();
	const userWallet = useSelector(selectWallet);
	const { ready } = useWallet();
	const { isAdmin, authToken } = useAuth();

	return (
		<Paper
			component="header"
			elevation={1}
			sx={{ backgroundColor: colorPlates.bgColor, borderRadius: 0 }}
			className="apexDucks__header">
			<ApexContainer sx={{ height: "100%" }}>
				<div className="apexDucks__header__row">
					<div className="apexDucks__header__row--logo">
						{!isApexHubHeader ? (
							<Link to={"/"}>
								<h1>Logo</h1>
							</Link>
						) : (
							<Link to={"/apexhub"}>
								<ApexHubLogo fillColor={colorPlates.textOnBg} />
							</Link>
						)}
					</div>


					<div className="apexDucks__header__row--utilities">

						{userWallet && ready ? (
							<ButtonAfterWalletConnect />
						) : (
							<WalletButton />
						)}
						<UserButton />
						{colorMode === "dark" && (
							<StyledButton
								type="button"
								onClick={() => changeColorMode("light", defaultLightColors)}>
								<DayLightIcon />
							</StyledButton>
						)}
						{colorMode === "light" && (
							<StyledButton
								type="button"
								onClick={() => changeColorMode("dark", defaultDarkColors)}>
								<DarkModeIcon />
							</StyledButton>
						)}
					</div>
				</div>
			</ApexContainer>
		</Paper>
	);
}


const UserButton = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { authToken, user, isAdmin } = useAuth();
	const navigate = useNavigate();

	const open = Boolean(anchorEl);
	const location = useLocation();

	let subMenu;

	useEffect(() => setAnchorEl(null), [location]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	subMenu = isAdmin ? [
		{ label: "My Account", path: "", key: "userSubMenu1" },
		{ label: "My Account Settings", path: "", key: "userSubMenu2" },
	] : [
		{ label: "My Profile", path: "", key: "userSubMenu1" },
		{ label: "My Account Settings", path: "", key: "userSubMenu2" },
	];

	return authToken && user ? (
		<React.Fragment>
			<StyledButton
				id="userOptions-button"
				aria-controls="userOptions-menu"
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				className="afterAuthUserButton"
				type="button">
				<span className="afterAuthUserButton__dp">U</span>

				<span className="afterAuthUserButton__meta">
					<span className="tf-overline">
						{user?.userName ?? "....user_name"}
					</span>
					<span className="tf-button2">4.2 SOL</span>
				</span>
			</StyledButton>
			<Popover
				id="userOptions-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: -16,
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
					{subMenu.map((menu) => (
						<Link
							key={menu.key}
							className="browseSubmenu__item tf-button2"
							to={menu.path}>
							{menu.label}
						</Link>
					))}
				</div>
			</Popover>
		</React.Fragment >
	) : (
	<StyledButton onClick={() => navigate(routePaths.signUp)} type="button">
		<UserIcon />
	</StyledButton>
);
};
