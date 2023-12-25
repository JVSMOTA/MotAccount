
import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import AboutContainer from "../../components/AboutContainer"

export default function About() {
	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<AboutContainer />
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
