import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Ementa from './components/Ementa';
import Bebidas from './components/Bebidas';
import Sobremesas from './components/Sobremesas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <main className="container">
            <Routes>
                <Route path="/" element={<Ementa />} />
                <Route path="/bebidas" element={<Bebidas />} />
                <Route path="/sobremesas" element={<Sobremesas />} />
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
