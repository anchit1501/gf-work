import React from 'react';
import './App.css';
import  Navbar  from './components/Nav';
import Dropdown from './components/dropdown/Dropdown';
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
   <div className='App'>
   <Navbar/>

   <Dropdown/>
   </div>
   </ChakraProvider>
  );
}

export default App;