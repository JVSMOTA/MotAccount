import { useNavigate } from "react-router-dom";
import DoubleContainer from "../../components/DoubleContainer"
import LightContainer from "../../components/LightContainer"
import NormalContainer from "../../components/NormalContainer"
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function MenuPrincipal() {
	const navigate = useNavigate();
	
	useEffect(() => {
		const token = Cookies.get('token')
	
		if (!token) {
		  // Se não houver token, redirecione para a página de login
		  navigate('/auth/login');
		  return; // Pare a execução aqui para não fazer a requisição sem token
		}
	
		// Se chegou aqui, há um token, então faça a requisição nescessária

	  }, [navigate]);
	

	return (
		<>
		<DoubleContainer>
			<LightContainer>
			</LightContainer>
			<NormalContainer>
			</NormalContainer>
		</DoubleContainer>
		</>
	)
}
