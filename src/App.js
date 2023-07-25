import './App.css';
import React, {useState} from 'react'
import Footer from './Components/Footer';
import Header from './Components/header';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact'

function App() {
  const [model, setModel] = useState(false)
  return (
    <div className="App bg-bg-color text-white w-full">
      <BrowserRouter>
              <Header setModel={setModel}/>
              {model === true &&(<Contact setModel={setModel}/>)}
              <Routes>
                  <Route path='' element={<Home />}></Route>
              </Routes>
              <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
