const listaProjetos = [
    {
        id: 1,
        titulo: 'Sistema de exclusão de usuários',
        texto: 'Projeto WordPress para o condomínio RB1 apresenta uma solução integrada com recursos avançados de gestão de usuários, implementando API em Node.js para comunicação eficiente entre o front-end em React.js e o WordPress. Essa abordagem permite uma administração independente. A intergração das APIs (wordpress e minha) permitiram esta flexibilização eficaz da gestão de usuários.',
        git: "https://github.com/diogo939405/crud_remove/tree/MudancaMenu",
        gitBackEnd:"https://github.com/niltonjacintho/apiwordpress",
        link: 'https://rb1-condominio-extranet.netlify.app'
    }, {
        id: 2,
        titulo: 'Sistema de controle financeiro',
        texto: 'Sistema responsavel pelo controle financeiro dos projetos da FPLF. Fornece aos coordenadores extrato financeiro dos projetos e de suas contas agrupadores. Desevolvido com Angular e API com NestJS utiliza-se de SQLServer como banco de dados e faz integração com outros sistemas da FPLF utilizando-se de APIs! Participei como estagiário aompanhando e atuando na criação das APIs e também na criação do front-end em telas com uso do AG-GRID  e do PRIME-REACT.',
        git: '',
        gitBackEnd:'',
        link: '',

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