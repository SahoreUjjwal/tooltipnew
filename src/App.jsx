
import './App.css';
import { useState } from 'react';
import { Button } from './components/Button';

function App() {
  
 
  const [show ,setShow] =useState(false);
  const toggleTooltip=()=>{
      
      setShow(!show);
  }
  return (
    <>
      <div style={{width:"100vw",height:"100vh"}}>
        <Button  toggleTooltip = {toggleTooltip} show={show}/>
      </div>
    </>
  )
}

export default App
