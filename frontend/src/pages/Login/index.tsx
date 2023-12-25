
import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import LoginForm from "../../components/LoginForm"

export default function Login() {
	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<LoginForm />
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
