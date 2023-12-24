
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../src/pages/Login"
import About from "../src/pages/About"
import MenuLojas from "./pages/MenuLojas"
import MenuPrincipal from "../src/pages/MenuPrincipal"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/menuLojas" element={<MenuLojas />} />
				<Route path="/menuPrincipal" element={<MenuPrincipal />} />
			</Routes>
		</BrowserRouter>
	)
}
