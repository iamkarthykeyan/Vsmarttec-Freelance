import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import About from './Components/Pages/About'
import JobOpenings from './Components/Pages/JobOpenings'
function App() {

  return (
    <>
     
       <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/jobopenings' element={<JobOpenings/>}></Route>
        </Routes>
        <Footer></Footer>
    
    </>
  )
}

export default App
