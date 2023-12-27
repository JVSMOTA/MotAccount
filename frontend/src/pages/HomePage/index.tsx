import DoubleContainer from "../../components/DoubleContainer"
import LightContainer from "../../components/LightContainer"
import NormalContainer from "../../components/NormalContainer"
import ButtonForm from "../../components/ButtonForm"
import { Div, Hr } from "./style"

export default function HomePage() {
	return (
		<>
		<DoubleContainer>
			<LightContainer>
				<h1>Objetivo do Sistema</h1>
				<Hr />
				<p>O objetivo principal do MotAccount é facilitar a administração das finanças da Sapatarias Mota, proporcionando uma ferramenta intuitiva e eficaz para o gerenciamento financeiro. Este projeto é parte de um esforço contínuo para melhorar a eficiência operacional e garantir o sucesso contínuo da loja.</p>
				<Hr />
				<h1>Entrar no Sistema</h1>
				<ButtonForm placeholder="Entrar"/>
			</LightContainer>
			<NormalContainer>
				<h1>User Stories</h1>
				<Hr />
				<ol>
					<p>Como <strong>administrador</strong> da Sapatarias Mota, eu quero ser capaz de:</p>
					<li>Acessar Relatório Financeiro:</li>
					<ul>
						<li>Para obter uma visão geral das finanças da loja.</li>
						<li>Para tomar decisões financeiras informadas.</li>
					</ul>
					<li>Exportar Dados Financeiros:</li>
					<ul>
						<li>Para compartilhar informações financeiras com outros membros da equipe ou contadores.</li>
						<li>Para manter um registro de backup dos dados financeiros.</li>
					</ul>
					<li>Receber Notificações de Pagamentos Pendentes:</li>
					<ul>
						<li>Para ser lembrado de contas e pagamentos pendentes.</li>
						<li>Para evitar multas por atrasos nos pagamentos.</li>
					</ul>
				</ol>
				<ol>
					<p>Como <strong>funcionário</strong> da Sapatarias Mota, eu quero ser capaz de:</p>
					<li>Adicionar Apurado Diário:</li>
					<ul>
						<li>Para registrar as vendas diárias e o desempenho financeiro da loja.</li>
					</ul>
					<li>Registrar Despesas:</li>
					<ul>
						<li>Para manter um registro de backup dos dados financeiros.</li>
						<li>Para garantir que todas as despesas sejam registradas de forma precisa.</li>
					</ul>
					<li>Agendar Pagamentos:</li>
					<ul>
						<li>Para programar pagamentos a fornecedores ou contas recorrentes.</li>
					</ul>
				</ol>
			</NormalContainer>
		</DoubleContainer>
		</>
	)
}
