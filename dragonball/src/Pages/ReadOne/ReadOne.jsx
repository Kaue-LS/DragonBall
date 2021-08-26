import { Title } from "../../Components/Title/styled"
import * as S from './styled'
import Power from "../../Components/Power/Power"
import { useHistory } from "react-router-dom"
// import { useState } from "react"
// import Loading from '../../Components/Loading/Loading'

export default function ReadOne(props) {
    const item = props.location.state
    // const [loading,setLoading] = useState(false)

    const history = useHistory();
    // history leva para as rotas qye colocamos

    const deleteHandler = async event => {
        event.preventDefault()
        history.push(`/delete/${item._id}`,item)
    }
    // o async para esperar ate ele carregar a api
    const updateHandler = async event => {
        event.preventDefault()
        // prevent default para nao carregar a pagina
        history.push(`/update/${item._id}`,item)
        // o item no final indica que ele vai levar a item junto a nova rota
    }

    return (
        <S.Card>
        
            <Title>{item.name}</Title>
                <S.ImgBlock>
                    <S.Img src={item.url} alt='Personagem'/>
                </S.ImgBlock>
                <S.PowerArea>
                    <S.Text><strong>Poder: </strong></S.Text>
                    <Power value={item.poder}></Power>
                </S.PowerArea>

                <S.Text><strong>Raça: </strong>{item.raca}</S.Text>
                <S.Text><strong>Saga: </strong>{item.saga}</S.Text>


        <S.ButtonArea>
            <S.ButtonDelete onClick={deleteHandler} >Deletar</S.ButtonDelete>
            <S.ButtonEdit onClick={updateHandler}>Editar</S.ButtonEdit>
        </S.ButtonArea>
            </S.Card>
        
    )
}