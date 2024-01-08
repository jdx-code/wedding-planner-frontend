import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Panel from './Panel/Panel'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Panel/>
      <ToastContainer />
    </div>
  )
}

export default App