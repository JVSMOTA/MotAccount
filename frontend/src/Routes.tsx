
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "../src/pages/HomePage"
import Login from "../src/pages/Login"
import About from "../src/pages/About"
import MenuLojas from "./pages/MenuLojas"
import MenuPrincipal from "../src/pages/MenuPrincipal"
import MenuApurados from "./pages/MenuApurados"
import MenuAgendamentos from "./pages/MenuAgendamentos"
import MenuDespesas from "./pages/MenuDespesas"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/menuLojas" element={<MenuLojas />} />
				<Route path="/menuPrincipal" element={<MenuPrincipal />} />
				<Route path="/menuPrincipal/:id" element={<MenuPrincipal />} />
				<Route path="/menuPrincipal/:id/apurados" element={<MenuApurados />} />
				<Route path="/menuPrincipal/:id/agendamentos" element={<MenuAgendamentos />} />
				<Route path="/menuPrincipal/:id/despesas" element={<MenuDespesas />} />
			</Routes>
		</BrowserRouter>
	)
}
