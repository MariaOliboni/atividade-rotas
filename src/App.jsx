import './App.css'
import Menu from './components/Menu/Menu';
import Home from './paginas/Home/Home';
import SalaDeRotacao from './paginas/SalaDeRotacao/SalaDeRotacao';
import Contatos from './paginas/Contatos/Contatos';
import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {

  return (
    <BrowserRouter>
    <Menu />
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sala-de-rotacao' element={<SalaDeRotacao />} />
        <Route path='/contatos' element={<Contatos />} />

        <Route path='*' element={<h1>404 - Página Não Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App