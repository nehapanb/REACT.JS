import { createElement } from 'react'
import './App.css'

function App() {
  //let a = createElement("h1",[],"hello from element")
 let name = "Neha"
 let ob = {
  fname : "Neha Panbude",
  age : 21
 }
  return (
   // a
   <div>
   <h1> my name is {name} </h1>
   <h2>{ob.fname}</h2>
   <h3>{ob.age}</h3>
   </div>
  )

  }


export default App
