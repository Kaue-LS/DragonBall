import 'Navbar.scss'

export default function Navbar(){
    return(
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list__item'><a href='#!'>Início</a></li>
                <li className='navbar__list__item'><a href='#!'>Criar</a></li>
                <li className='navbar__list__item'><a href='#!'>Deletar Tudo</a></li>
                <li className='navbar__list__item'><a href='#!'>Sobre</a></li>
            </ul>
        </div>
    )
}