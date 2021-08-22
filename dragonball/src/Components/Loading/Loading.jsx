import animation from '../Loading/Animation.svg';

import * as S from './styled'

export default function Loading(){
    return(
        <S.Spinner>
      <S.Img src={animation}></S.Img>
        </S.Spinner>
    )
}