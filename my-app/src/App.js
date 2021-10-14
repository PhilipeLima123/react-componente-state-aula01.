import logo from './logo.svg';
import './App.css';
import React from 'react';
import Mensagem from './comp/Mensagem';
import Carta from './comp/carta';
import Contador from './comp/Contador';

export default function App() {
  return (
    <div className="App">
      <>
      <Contador/>
      <Carta/>
     <Mensagem/>
     </>
    </div>
  );
}


