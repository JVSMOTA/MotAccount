import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import LoginForm from "../../components/LoginForm"
import { SetStateAction, useState } from "react"

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		senha: ""
	});

	const updateLoginFormData = (e: { target: { name: any; value: any } }) => {
		setLoginFormData({...loginFormData, [e.target.name]:e.target.value})
		console.log(loginFormData)
	};

	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<LoginForm updateFormData={updateLoginFormData} />
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
