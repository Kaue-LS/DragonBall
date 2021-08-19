
import Logo from './logo.png'
import * as S from './styled'
// importa tudo como S
export default function Navbar() {
    return (
        <S.Navbar>
            <S.Img src={Logo} alt='Dragon Ball' />
            <S.List>
                <S.ListItem>
                    < S.LinkedPage to='/'>Inicio</S.LinkedPage>
                </S.ListItem>
                <S.ListItem>
                    <S.LinkedPage to='/create'>Criar</S.LinkedPage>
                </S.ListItem>
                <S.ListItem>
                    <S.LinkedPage to='/deleteall'>Deletar tudo</S.LinkedPage>
                </S.ListItem>
                <S.ListItem>
                    <S.LinkedPage to='/about'>Sobre</S.LinkedPage>
                </S.ListItem>
            </S.List>
        </S.Navbar>
    )
}