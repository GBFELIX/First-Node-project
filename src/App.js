import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HellWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/outralista';
import SeuNome from './components/SeuNome';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer';

function App() {
 
  return (
    <div className="App">
      <h1>Testando evento</h1>
      <Evento/>
      <p></p>
      <Form></Form>
      <p></p>
      <HellWord />
      <SayMyName nome='Gabriel'/>
      <Pessoa nome="Gabriel" idade="21" prof="programador" foto="https://via.placeholder.com/150"/>
      <Frase/>
      <p></p>
      <List/>
      <p></p>
      <h1>Renderização de Condição</h1>
      <Condicional></Condicional>
      <p></p>
      <OutraLista></OutraLista>
      <p></p>
      <h1>State List</h1>
      <SeuNome></SeuNome>
      <p></p>
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Empresa'element={<Empresa/>}/>       
          <Route path='/Contato' element={<Contato/>}/>         
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
export default App;
