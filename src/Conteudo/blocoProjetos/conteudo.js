const listaProjetos = [
    {
        id: 1,
        titulo: 'Meu primeiro projeto',
        texto: 'projeto WordPress para o condomínio RB1 apresenta uma solução integrada com recursos avançados de gestão de usuários, implementando API em Node.js para comunicação eficiente entre o front-end em React.js e o WordPress. Essa abordagem permite uma administração independente. A intergração das APIs (wordpress e minha) permitiram esta flexibilização eficaz da gestão de usuários.',
        git: "https://www.google.com/",
        link: 'https://rb1-condominio-extranet.netlify.app'
    }, {
        id: 2,
        titulo: '222Meu primeiro projeto',
        texto: <a href="https://www.google.com/">Git</a>,
        link: 'http://google.com',
    }, {
        id: 3,
        titulo: '3333Meu primeiro projeto',
        texto: 'Texto do item 3',
        link: 'http://google.com',
    },

]



export const getDadosProjeto = (id) => {
    let result = {
        id: -1,
        titulo: '',
        texto: '',
    }
    for (let index = 0; index < listaProjetos.length; index++) {
        const element = listaProjetos[index];
        if (id === element.id) {
            result = element
        }
    }
    return result;
}