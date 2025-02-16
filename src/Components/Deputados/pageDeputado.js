import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stylesPageDeputado.css";

const Deputado = ({ match }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [deputado, setDeputado] = useState(null);

	useEffect(() => {
		async function fetchDeputado() {
			const { id } = match.params;
			const { data } = await axios.get(
				`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`
			);

			setIsLoading(false);
			setDeputado(data.dados);
		}

		fetchDeputado();
	}, [match]);

	return (
		<div className="deputado">
			{!isLoading && deputado !== null && (
				<>
					<div className="title">
						<figure class="deputado-photo">
							<img
								width="114"
								height="152"
								alt={deputado.nomeCivil}
								src={deputado.ultimoStatus.urlFoto}
							/>
						</figure>
						<h1>
							{deputado.nomeCivil} - {deputado.ufNascimento}
						</h1>
						<div class="basic-info">
							<h3 class="info-text tags has-addons">
								<span class="tag is-info ">Condição Eleitoral: </span>
								<span class="tag is-white">
									{deputado.ultimoStatus.condicaoEleitoral}
								</span>
							</h3>
							{deputado.ultimoStatus.situacao && (
								<h3 class="info-text tags has-addons">
									<span class="tag is-info ">Situação: </span>
									<span class="tag is-white">
										{deputado.ultimoStatus.situacao}
									</span>
								</h3>
							)}
						</div>
					</div>
					<div className="info-deputado">
						<section className="info-card">
							<h2 class=" title is-4">Informações</h2>
							<div class="info-card-container">
								<h3 class="tags has-addons info-text">
									<span class="tag is-primary ">Nome:</span>
									<span class="tag">{deputado.ultimoStatus.nome}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">CPF: </span>
									<span class="tag">{deputado.cpf}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Sigla do Partido: </span>
									<span class="tag">{deputado.ultimoStatus.siglaPartido}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">UF: </span>
									<span class="tag">{deputado.ultimoStatus.siglaUf}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">ID Legislatura: </span>
									<span class="tag">{deputado.ultimoStatus.idLegislatura}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Data de Nascimento: </span>
									<span class="tag">{deputado.dataNascimento}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Município de Nascimento: </span>
									<span class="tag">{deputado.municipioNascimento}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Escolaridade: </span>
									<span class="tag">{deputado.escolaridade}</span>
								</h3>
							</div>
						</section>

						<section className="info-card">
							<h2 class="title is-4">Gabinete</h2>
							<div class="info-card-container">
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Nome: </span>
									<span class="tag">{deputado.ultimoStatus.gabinete.nome}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Prédio: </span>
									<span class="tag">
										{deputado.ultimoStatus.gabinete.predio}
									</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Sala: </span>
									<span class="tag">{deputado.ultimoStatus.gabinete.sala}</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Andar: </span>
									<span class="tag">
										{deputado.ultimoStatus.gabinete.andar}
									</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">Telefone: </span>
									<span class="tag">
										{deputado.ultimoStatus.gabinete.telefone}
									</span>
								</h3>
								<h3 class="info-text tags has-addons">
									<span class="tag is-primary ">E-mail: </span>
									<span class="tag">
										{deputado.ultimoStatus.gabinete.email}
									</span>
								</h3>
							</div>
						</section>
					</div>
				</>
			)}
		</div>
	);
};

export default Deputado;
