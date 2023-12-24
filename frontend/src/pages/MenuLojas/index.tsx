
import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import FormContainer from "../../components/FormContainer"
import { Title } from "./style"

export default function MenuLojas() {
	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<FormContainer>
					<Title>Acessar a Loja</Title>
				</FormContainer>
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
