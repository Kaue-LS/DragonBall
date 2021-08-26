import { Title } from '../../Components/Title/styled';
import { Area } from '../../Components/Area/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import me from './Photo.jpg.png';

export default function About() {
  return(
    <Area>
      <Title>Sobre</Title>
      <Paragraph>O projeto se trata de trabalho para conhecer melhor sobre o React.jS com a manutenção do Banco de Dados CRUD. O tema escolhido foi o
        anime Dragon Ball onde pode adicionar o personagem, imagens e seus atributos.
      </Paragraph>


      <S.ImgArea>
        <S.Img src={me}></S.Img>
      </S.ImgArea>

      <Paragraph>Meu nome é Kauê, teho 17 anos, sou aluno do curso de informática da Blue Edtech além de cursar na Escola Técnica do Centro Paula Souza, na Etec de Ilha Solteira localizado interior de São Paulo.</Paragraph>

      <Paragraph>Caso queira entrar em contato, você pode me enviar mensagem nesses sites:</Paragraph>

    <S.Icon>
        <a href="https://github.com/Kaue-LS" target="_blank" rel="noopener noreferrer"><i className="im im-github"></i></a>
        <a href="https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/" target="_blank" rel="noopener noreferrer"><i className="im im-linkedin"></i></a>
        <a href="mailto:kaue.ls0506@gmail.com" target="_blank" rel="noopener noreferrer"><i className="im im-mail"></i></a>
    </S.Icon>
    </Area>
  )
}