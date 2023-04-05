import Pages from "./pages/Pages";
import Category from "./components/Category"
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>Yummy</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: teal;
`

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
  padding: 2rem;
  gap: 30px;
  margin: 20px 0; 
  svg{
    font-size: 2rem;
    color: Teal;
  }
`
export default App;
