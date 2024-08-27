const listaProjetos = [
    {
        id: 1,
        titulo: 'Site de Doações',
        texto: 'Desenvolvi um template de site para um cliente utilizando ReactJS, Node.js e MongoDB, com integração de sistema de pagamento via Mercado Pago. O design leve e cativante, aliado à responsividade fornecida pelo Bootstrap, tornou a experiência do usuário fluida em qualquer dispositivo. Esse projeto desafiador, que levou cerca de 5 meses para ser concluído, foi uma jornada de aprendizado e superação. Fiquei extremamente orgulhoso do resultado final, que atendeu às expectativas do cliente e elevou a qualidade do meu trabalho como desenvolvedor junior.',
        git: "https://github.com/diogo939405/ongprojectfront",
        gitBackEnd:"https://github.com/diogo939405/ongProject-back",
        link: 'https://ongdoacao.vercel.app/'
    }, {
        id: 2,
        titulo: 'Sistema de controle financeiro',
        texto: 'Apresento um site de doações que utiliza a API do MercadoPago para processar pagamentos. Este projeto foi desenvolvido com o objetivo de aprendizado e para criar algo que pudesse ser reutilizado em futuros trabalhos de desenvolvimento. O front-end foi construído usando HTML, CSS, Bootstrap, React.js, React Redux, JavaScript e está hospedado na Vercel. Já o back-end foi desenvolvido com Node.js, MongoDB, e testado com Postman, sendo hospedado na Render. O site é totalmente responsivo e segue os padrões de UX/UI.',
        git: 'https://github.com/diogo939405/ongprojectfront',
        gitBackEnd:'https://github.com/diogo939405/ongProject-back',
        link: '//ongdoacao.vercel.app/',

    }, {
        id: 3,
        titulo: 'App Santa Bárbara',
        texto: 'Conjunto de soluções Mobile e Web(Admin). Visa a integração entre os paroquianos através do uso de app que possue diversas informações como: Avisos paroquiais, agenda anual, informações (com mapa de localização) de todas as paroquias do Rio de Janeiro além de um game de Quiz com perguntas religiosas. Neste projeto pude participar em quase todas as etapas: FrontEnd Flutter, Web Angular, Database FireStore. Projeto ainda em fase de desenvolvimento, segue o login e senha para acesso ; Login:teste@123  / Senha:123456 ',
        git: '',
        gitBackEnd:'',
        link: 'https://admparoquia.netlify.app/',
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