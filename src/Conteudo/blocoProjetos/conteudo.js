const listaProjetos = [
    {
        id: 1,
        titulo: 'Meu primeiro projeto',
        texto: 'Texto do item 1',
    },    {
        id: 2,
        titulo: '222Meu primeiro projeto',
        texto: 'Texto do item 1',
    },    {
        id: 3,
        titulo: '3333Meu primeiro projeto',
        texto: 'Texto do item 1',
    },

]

export const getDadosProjeto = (id) => {
    let result = {}
    for (let index = 0; index < listaProjetos.length; index++) {
        const element = listaProjetos[index];
        if (id == element.id) {
            result = element
        }
    }
    return result;
}