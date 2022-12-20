import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResearchWallet from './pages/ResearchWallet';
import Collections from './pages/Collections';
import PredictPage from './pages/PredictPage';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ResearchWallet' element={<ResearchWallet />}/>
            <Route path='/Collections' element={<Collections />}/>
            <Route path='/PredictPage' element={<PredictPage />}/>
            <Route path='*' element={<Home />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
