import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Info from './pages/Info'
import View from './pages/View'
import Downloads from './pages/Downloads'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/resume-details' element={<Info />}/>
        <Route path='/all-resume' element={<View />}/>
        <Route path='/resume/:id' element={<Downloads />}/>
        <Route path='/*' element={<Pnf />}/>
      </Routes>
      <Footer />
      

    </>
  )
}

export default App
