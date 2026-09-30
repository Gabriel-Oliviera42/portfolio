/*
	Certificados exibidos na home (secao #certificates) e no bloco "O que entrou
	por ultimo" da pagina do portfolio. Um objeto por certificado.

	Todo dado aqui saiu do texto do proprio PDF (pdftotext), nada estimado.
	Campo sem informacao fica "" - nunca inventar.

	- id (obrigatorio): slug unico. Vira o nome das imagens e a ancora
	  #certificado-<id> na home.
	- title (obrigatorio): nome curto, o que aparece na barra.
	- fullTitle (obrigatorio): nome como esta escrito no certificado.
	- issuer (obrigatorio): quem emitiu.
	- date (obrigatorio): data de CONCLUSAO, em AAAA-MM-DD. Ordena a lista e
	  decide o "ultimo certificado". Nao e a data em que entrou no site, porque
	  essa empataria: os 14 primeiros entraram no mesmo dia.
	- hours: carga horaria do certificado, em horas.
	- image / thumb: saem do pipeline (docs/05), em images/certificados/.
	  image com 1400px (janela de leitura), thumb com 480px (previa no hover).
	  Os PDFs originais NAO vao pro site.
	- credentialUrl: onde conferir. Alura tem link direto por certificado. O
	  Curso em Video so valida por formulario, entao o link e a pagina de
	  validacao e o codigo vai no campo code.
	- code: codigo de validacao impresso no certificado, quando existe.
*/

window.PORTFOLIO_CERTIFICATES = [
	{
		id: "jornada-ia-vibe-coding",
		title: "Jornada IA: Vibe Coding",
		fullTitle: "Jornada IA: Vibe Coding",
		issuer: "Curso em Vídeo",
		date: "2026-09-13",
		hours: 9,
		image: "images/certificados/jornada-ia-vibe-coding.webp",
		thumb: "images/certificados/jornada-ia-vibe-coding-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-49027-5"
	},
	{
		id: "python-3-mundo-3",
		title: "Python 3: Mundo 3",
		fullTitle: "Python 3 - Mundo 3",
		issuer: "Curso em Vídeo",
		date: "2026-05-26",
		hours: 40,
		image: "images/certificados/python-3-mundo-3.webp",
		thumb: "images/certificados/python-3-mundo-3-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-685A-A"
	},
	{
		id: "python-3-mundo-2",
		title: "Python 3: Mundo 2",
		fullTitle: "Python 3 - Mundo 2",
		issuer: "Curso em Vídeo",
		date: "2026-05-08",
		hours: 40,
		image: "images/certificados/python-3-mundo-2.webp",
		thumb: "images/certificados/python-3-mundo-2-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-67AC-5"
	},
	{
		id: "python-3-mundo-1",
		title: "Python 3: Mundo 1",
		fullTitle: "Python 3 - Mundo 1",
		issuer: "Curso em Vídeo",
		date: "2026-04-26",
		hours: 40,
		image: "images/certificados/python-3-mundo-1.webp",
		thumb: "images/certificados/python-3-mundo-1-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-66E2-8"
	},
	{
		id: "mysql",
		title: "MySQL",
		fullTitle: "MySQL",
		issuer: "Curso em Vídeo",
		date: "2024-01-05",
		hours: 40,
		image: "images/certificados/mysql.webp",
		thumb: "images/certificados/mysql-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-6573-8"
	},
	{
		id: "alura-git-github-ramificacao",
		title: "Git e GitHub: ramificação e pull requests",
		fullTitle: "Git e GitHub: estratégias de ramificação, conflitos e pull requests",
		issuer: "Alura",
		date: "2023-12-26",
		hours: 8,
		image: "images/certificados/alura-git-github-ramificacao.webp",
		thumb: "images/certificados/alura-git-github-ramificacao-mini.webp",
		credentialUrl: "https://cursos.alura.com.br/user/gabriellourenco343/course/git-github-branching-conflitos-pull-requests/certificate",
		code: ""
	},
	{
		id: "alura-git-github-colaborando",
		title: "Git e GitHub: colaboração em projetos",
		fullTitle: "Git e GitHub: compartilhando e colaborando em projetos",
		issuer: "Alura",
		date: "2023-12-25",
		hours: 8,
		image: "images/certificados/alura-git-github-colaborando.webp",
		thumb: "images/certificados/alura-git-github-colaborando-mini.webp",
		credentialUrl: "https://cursos.alura.com.br/user/gabriellourenco343/course/git-github-compartilhando-colaborando-projetos/certificate",
		code: ""
	},
	{
		id: "html5-css3-modulo-4",
		title: "HTML5 e CSS3: módulo 4",
		fullTitle: "HTML5 e CSS3: módulo 4 de 5",
		issuer: "Curso em Vídeo",
		date: "2023-12-17",
		hours: 40,
		image: "images/certificados/html5-css3-modulo-4.webp",
		thumb: "images/certificados/html5-css3-modulo-4-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-2641E-1"
	},
	{
		id: "alura-http",
		title: "HTTP: a web por baixo dos panos",
		fullTitle: "HTTP: entendendo a web por baixo dos panos",
		issuer: "Alura",
		date: "2023-12-07",
		hours: 10,
		image: "images/certificados/alura-http.webp",
		thumb: "images/certificados/alura-http-mini.webp",
		credentialUrl: "https://cursos.alura.com.br/user/gabriellourenco343/course/http-entendendo-web-por-baixo-dos-panos/certificate",
		code: ""
	},
	{
		id: "git-e-github",
		title: "Git e GitHub",
		fullTitle: "Git e GitHub",
		issuer: "Curso em Vídeo",
		date: "2023-10-16",
		hours: 20,
		image: "images/certificados/git-e-github.webp",
		thumb: "images/certificados/git-e-github-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-A18C-1"
	},
	{
		id: "html5-css3-modulo-3",
		title: "HTML5 e CSS3: módulo 3",
		fullTitle: "HTML5 e CSS3: módulo 3 de 5",
		issuer: "Curso em Vídeo",
		date: "2023-09-14",
		hours: 40,
		image: "images/certificados/html5-css3-modulo-3.webp",
		thumb: "images/certificados/html5-css3-modulo-3-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-15678-4"
	},
	{
		id: "javascript",
		title: "JavaScript",
		fullTitle: "JavaScript",
		issuer: "Curso em Vídeo",
		date: "2023-07-23",
		hours: 40,
		image: "images/certificados/javascript.webp",
		thumb: "images/certificados/javascript-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-6C61-3"
	},
	{
		id: "html5-css3-modulo-2",
		title: "HTML5 e CSS3: módulo 2",
		fullTitle: "HTML5 e CSS3: módulo 2 de 5",
		issuer: "Curso em Vídeo",
		date: "2023-07-10",
		hours: 40,
		image: "images/certificados/html5-css3-modulo-2.webp",
		thumb: "images/certificados/html5-css3-modulo-2-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-E776-9"
	},
	{
		id: "html5-css3-modulo-1",
		title: "HTML5 e CSS3: módulo 1",
		fullTitle: "HTML5 e CSS3: módulo 1 de 5",
		issuer: "Curso em Vídeo",
		date: "2023-07-04",
		hours: 40,
		image: "images/certificados/html5-css3-modulo-1.webp",
		thumb: "images/certificados/html5-css3-modulo-1-mini.webp",
		credentialUrl: "https://www.cursoemvideo.com/validacao-de-certificado/",
		code: "BAC2F-C9E9-7"
	}
];
