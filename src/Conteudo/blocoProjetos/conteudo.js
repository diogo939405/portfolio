const listaProjetos = [
    {
        id: 1,
        titulo: 'Quiz de Perguntas Esportivas - Projeto Pessoal',
        texto: 'Este mini projeto foi desenvolvido com o objetivo de aprimorar meus conhecimentos em React utilizando TypeScript. Trata-se de um quiz interativo de perguntas esportivas, onde integrei uma API especializada no formato de quiz. O uso do TypeScript proporcionou uma maior segurança e previsibilidade no código, enquanto o React permitiu criar uma interface dinâmica e fluida. Esse projeto me ajudou a aprofundar minhas habilidades em tecnologias modernas e a explorar mais a fundo o desenvolvimento de aplicações web interativas.',
        git: "https://github.com/diogo939405/QuizApp",
        gitBackEnd: "https://github.com/diogo939405/ongProject-back",
        link: 'https://lnkd.in/dey4dMtS'
    }, {
        id: 2,
        titulo: 'Site de Doação',
        texto: 'Apresento um site de doações que utiliza a API do MercadoPago para processar pagamentos. Este projeto foi desenvolvido com o objetivo de aprendizado e para criar algo que pudesse ser reutilizado em futuros trabalhos de desenvolvimento. O front-end foi construído usando HTML, CSS, Bootstrap, React.js, React Redux, JavaScript e está hospedado na Vercel. Já o back-end foi desenvolvido com Node.js, MongoDB, e testado com Postman, sendo hospedado na Render, utilizado o Mercado Pago como sistema de pagamento. O site é totalmente responsivo e segue os padrões de UX/UI.',
        git: 'https://github.com/diogo939405/ongprojectfront',
        gitBackEnd: 'https://github.com/diogo939405/ongProject-back',
        link: '//ongdoacao.vercel.app/',

    }, {
        id: 3,
        titulo: 'App Santa Bárbara',
        texto: 'Conjunto de soluções Mobile e Web(Admin). Visa a integração entre os paroquianos através do uso de app que possue diversas informações como: Avisos paroquiais, agenda anual, informações (com mapa de localização) de todas as paroquias do Rio de Janeiro além de um game de Quiz com perguntas religiosas. Neste projeto pude participar em quase todas as etapas: FrontEnd Flutter, Web Angular, Database FireStore. Projeto concluido , procurar na play store "Paroquia News", segue o link para ver apresentação no linkledin',
        git: '',
        gitBackEnd: '',
        link: 'https://www.linkedin.com/posts/diogo-favilla-g-jacintho-8728041ba_flutter-desenvolvedor-junior-activity-7234227401784721408-dAgo?utm_source=share&utm_medium=member_desktop',
    },

]



export const getDadosProjeto = (id) => {
    let result = {
        id: -1,
        titulo: '',
        texto: '',
        link: '',

    }
    for (let index = 0; index < listaProjetos.length; index++) {
        const element = listaProjetos[index];
        if (id === element.id) {
            result = element
        }
    }
    return result;
}