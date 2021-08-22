export const Api ={
    baseUrl: "https://blue-backend-modulo4front.herokuapp.com",

    authorization: 'kaue.ls0506@gmail.com',

    createUrl: () => Api.baseUrl + "/",
    // retornos iguais mas os nomes e caminhos podem ser diferentes
    deleteAllUrl: () => Api.baseUrl + '/',
    // Fazendo um Post
    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: 'POST',
            // new significa que ta instanciando um objeto
            headers: new Headers({
                Authorization: Api.authorization,
                'ContentType': 'application/json'
                // Vai criar novo header quando for fazer cadastro novamente, ao criar ele faz um novo pois sao request diferentes a cada personagem
            }),
            body: JSON.stringify(body)
            // Vai transfomar json no formato de string, é esses tres componentes para criar
        })
    },


    // Fazer o delete para todos osdados

    buildApiDeleteRequest: url => {
        return fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                Authorization: Api.authorization,
                // Vai criar novo header quando for fazer cadastro novamente, ao criar ele faz um novo pois sao request diferentes a cada personagem
            })
        })
    }
}
// importar o comportamento do insomomnia para o vs code