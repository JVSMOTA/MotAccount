
import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import FormContainer from "../../components/FormContainer"
import { P, Title } from "./style"

export default function About() {
	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<FormContainer>
					<Title>Sobre a MotAccount</Title>
					<P>MotAccount é um sistema de controle financeiro projetado para atender às necessidades da renomada loja de calçados Sapatarias Mota.</P>
					<P>Esta aplicação foi desenvolvida para simplificar e aprimorar a gestão das finanças da loja, oferecendo recursos abrangentes para o registro de apurados diários, agendamento de pagamentos e o controle de despesas.</P>
				</FormContainer>
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
