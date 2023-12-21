// src/Routes.tsx

import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../src/pages/Login"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
