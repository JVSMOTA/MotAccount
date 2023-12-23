
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../src/pages/Login"
import About from "../src/pages/About"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}
