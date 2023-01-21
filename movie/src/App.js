import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Rekomendasi from './components/Rekomendasi';
import { useState } from 'react';
import Sliders from './components/Sliders';


function App() {
  const APIASW = process.env.REACT_APP_API_URL
  const KEYASW = process.env.REACT_APP_API_KEY

  const [pencarian, setPencarian] = useState('')
  const cari = (pencariandata) => {
    setPencarian(pencariandata)
  }

  return (
    <div className='bg-slate-900' >
      <BrowserRouter>
        <Navbar callback={cari} />
        <Sliders />
        <Rekomendasi datacari={pencarian}/>
      </BrowserRouter>
    </div>
  )
}

export default App
