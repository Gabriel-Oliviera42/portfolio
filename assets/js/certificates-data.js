/*
	Fonte dos certificados exibidos na home (secao #certificates).
	Adicione um objeto por certificado no array abaixo. Campos:

	- title (obrigatorio): nome do curso/certificado
	- issuer (obrigatorio): instituicao ou plataforma que emitiu
	- date (obrigatorio): ano ou mes/ano de conclusao
	- credentialUrl (opcional): link publico pra verificar o certificado - deixar "" se nao existir, nunca inventar
	- tags (opcional): array de strings curtas pra contexto (ex: ["python", "backend"])

	Exemplo (comentado - troque por certificados reais, nao inventar dados):

	{
		title: "Nome do curso",
		issuer: "Instituicao",
		date: "2026",
		credentialUrl: "",
		tags: ["exemplo"]
	}

	A secao inteira fica escondida automaticamente enquanto esse array estiver vazio.
*/

window.PORTFOLIO_CERTIFICATES = [];
