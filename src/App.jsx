import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import SideBar from './components/SideBar'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='container'>
    <NavBar />
<Main />
<SideBar />
<Content1/>
<Content2/>
<Content3/>
<Footer/>
</div>
</div>
  )
}

export default App
