import * as S from './styled'
import { Title } from '../../Components/Title/styled'
import { Api } from '../../Api/Api'
import { useHistory } from 'react-router'
import {useState} from 'react'
import Loading from '../../Components/Loading/Loading'
export default function DeleteAll() {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');

  }
  const [loading,setLoading]= useState(false)  
  const clickHandler = async event => {
    setLoading(true);

    event.preventDefault();

    await Api.buildApiDeleteRequest(Api.deleteAllUrl())
      .catch(e => { console.error('Erro ao deletar todos os dados:') })
  }
  // Dps que termina o delete ele vai redirecionar para a home
  return (
    <>
      {
        loading ===true ? (<Loading/>):(
        <>
        <Title>Deletar Tudo</Title>
  
        <S.Text>Você tem certeza que quer deletar todos os dados, uma vez executado, os dados não podem ser recuperados</S.Text>
        <S.ButtonArea>
          <S.ButtonCancel onClick={goToHome}>Cancelar</S.ButtonCancel>
          <S.ButtonDelete onClick={clickHandler}>Deletar</S.ButtonDelete>
        </S.ButtonArea>
      </>
        )
      }
    </>

   
  )
}
