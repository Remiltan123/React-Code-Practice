import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/Personlist'

function App() {

  const add = {
    city: "Sri Lanka",
    road: "jaffna",
    no: 10
  }

  const person = {
    frist: "Joseph",
    last: "Kumar"
  }

  const personlist = [
    {
      frist: "Joseph",
      last: "Kumar1"
    },
    {
      frist: "Joseph",
      last: "Kumar2"
    },
    {
      frist: "Joseph",
      last: "Kumar3"
    }
  ]

  return (
    <>
      <Greet name='Remi' age={10} />
      <Greet name='Remi' age={10} address={add} />
      <Greet name='Remi' age={10} address={{ city: "Sri Lanka", road: "jaffna", no: 10 }} />

      <Person name={person} />
      <PersonList name={personlist }/>
    </>
  )
}

export default App
