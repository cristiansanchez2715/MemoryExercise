import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const crearNumero = () => {

  const numeroJuego = Math.random()
  return Math.floor(200 * numeroJuego)
}


const [arrayJuego1, setArrayJuego1] = useState(0)
const [arrayJuego2, setArrayJuego2] = useState(0)
const [arrayJuego3, setArrayJuego3] = useState(0)
const [visibilityJuego, setVisibilityJuego] = useState(true)
const [challangeForm, setChallangeForm] = useState({numero1: null, numero2: null, numero3: null})
const [formComplete, setFormComplete] = useState({numero1: null, numero2: null, numero3: null})

// testing
useEffect(() => {
  console.log(challangeForm)
}, [challangeForm])



useEffect( () => {
 setArrayJuego1(crearNumero())
  setArrayJuego2(crearNumero())
  setArrayJuego3(crearNumero())
}, [])

const compara = (state) => {
  if (
    Number(state.numero1) === arrayJuego1 &&
    Number(state.numero2) === arrayJuego2 &&
    Number(state.numero3) === arrayJuego3
  ){
    alert("felicidades tienes muy buena memoria")
    }else {
      alert("sigue intentando")
    }
  console.log("tu formuario quedo con los siguientes numeros" + JSON.stringify(formComplete))
}
useEffect(() => {
  // Este código se ejecutará después de que se haya completado la actualización del estado
  compara(formComplete);
}, [formComplete]);

const envioFormulario = (e) => {
  e.preventDefault()
  setFormComplete(challangeForm )
  
  }

const efectoDesaparicion = () => {
  setTimeout( () => setVisibilityJuego(false), 3000)
}

useEffect(efectoDesaparicion, [])
const capturandoFormulario = (e) => {
  e.preventDefault()
const {name, value} = e.target
setChallangeForm(event => ({...event, 
[name]: value
}))
}

  return (
    <div className="App">
     {visibilityJuego &&  <div>
        
        <h1>{arrayJuego1}</h1>
        <h1>{arrayJuego2}</h1>
        <h1>{arrayJuego3}</h1>
        </div>
      }
      <h1>Eres capaz de recordar los numeros que viste en la app?</h1>
<form onSubmit={envioFormulario}>
  <label>numero 1</label>
  <input type='number' name='numero1' onChange={capturandoFormulario}></input>
  <label>numero 2</label>
  <input type='number' name='numero2' onChange={capturandoFormulario}></input>
  <label>numero 3</label>
  <input type='number' name='numero3' onChange={capturandoFormulario}></input>

  <button type='submit'>Jugar</button>
</form>



    </div>
  );
}

export default App;
