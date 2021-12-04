import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, NotFound, WalletConnect } from "../pages";



export default function AppRoutes() {
	return <Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<WalletConnect />} />
		</Route>

		<Route path="/*" element={<NotFound />} />
	</Routes>
}
