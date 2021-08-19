import Navbar from '../../Components/Navbar/Navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import './Main.scss'
import { Container } from '../../Components/Container/styled'
import ReadeAll from '../ReadAll/ReadAll'
import Create from '../Create/Create'
import DeleteAll from '../DeleteAll/Delete'
import About from '../About/About'
// Usaremso a tecnica do SSA single page aplication para nao precisar carregar qunado clicar em uma nova rota. Nao levando a uma outra pagina
export default function Main(){
    return(
        <>
        <BrowserRouter>
        <Navbar></Navbar>
        <Container>
        <Switch>
            {/* True para diferenciar dos outros */}
            <Route path='/' exact={true} component={ReadeAll}/>
            <Route path='/create' component={Create}/>
            <Route path='/deleteall' component={DeleteAll}/>
            <Route path='/about' component={About}/>

        </Switch>
        </Container>
        </BrowserRouter>
        </>
    )
}