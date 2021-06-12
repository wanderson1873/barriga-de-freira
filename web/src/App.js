import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Ementa from './components/Ementa/Ementa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <main className="AppBody">
            <Routes>
                <Route path="/" element={<Ementa />} />
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
