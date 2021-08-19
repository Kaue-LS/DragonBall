import * as C from "./styled"

export default function Create(){
    return(
        <>
        <C.Form>
        <C.Label>Nome</C.Label>
        <C.Nome type='text' maxLength='25' placeholder='Nome do personagem'></C.Nome>
        <C.Label>Imagem</C.Label>
        <C.Img type='text' placeholder='URL da imagem'></C.Img>
        <C.Label>Raça</C.Label>
        <C.Raca type='text' placeholder='Raça do personagem'>
            <option>Selecionar Raça...</option>
            <option>Sayajin</option>
            <option>Humano</option>
            <option>Freeza</option>
            <option>Majin</option>
            <option>Namekusejin</option>
            <option>Desconhecida</option>

        </C.Raca>
        <C.Label>Saga</C.Label>
        <C.Saga type='text' placeholder='Saga em que apareceu'>
        <option>Selecionar Saga...</option>
            <option>Saga Freeza</option>
            <option>Saga Android</option>
            <option>Saga Cell</option>
            <option>Saga Majin Boo</option>
            <option>Saga Bills</option>
            <option>Saga Universo 6</option>
            <option>Saga Goku Black</option>
            <option>Saga Saga Torneio do Poder</option>
            <option>Saga Moro</option>
            <option>Saga Granola</option>
            <option>Filmes</option>





        </C.Saga>
        <C.Label>Poder de Luta</C.Label>
        <C.PoderdeLuta min='0'  type='number' placeholder='Seu poder de luta'></C.PoderdeLuta>

        <C.Cadastrar type='button' value='Cadastrar'></C.Cadastrar>
        </C.Form>
        </>
    )
}