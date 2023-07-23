import './App.css';
import Header from './Components/header';
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-bg-color text-white">
      <BrowserRouter>
              <Routes>
                  <Route path='' element={<Home />}></Route>
              </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
