import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, NotFound, WalletConnect } from "../pages";



export default function AppRoutes() {
	return <Routes>
		<Route path="/solana-adapter-ui/" element={<Layout />}>
			<Route index element={<WalletConnect />} />
		</Route>

		<Route path="/*" element={<NotFound />} />
	</Routes>
}
