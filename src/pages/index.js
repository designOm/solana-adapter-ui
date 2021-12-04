import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Components/Header";
import NotFound from "./404";
import WalletConnect from "./WalletConnect";

export function Layout() {
	return (
		<div className="" id="AppexDucks">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export { WalletConnect, NotFound };

