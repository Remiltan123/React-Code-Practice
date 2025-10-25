import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/Personlist'
import { StatusofUser } from './components/Status'
import { Heading } from './components/Heading'
import { Remi } from './components/Remi'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { StyleComponents } from './components/StyleCom'
import { UseStateExample } from './components/UseState'

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


  enum StatusState {
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
  }

  const [count, setCount] = useState<number>(0)

  const HandleClick = ()=>{
    console.log("Button clicked")
     setCount(prev => prev + 1)
     console.log(count)
  }

  return (
    <>
      <Greet name='Remi' age={10} />
      <Greet name='Remi' age={10} address={add} />
      <Greet name='Remi' age={10} address={{ city: "Sri Lanka", road: "jaffna", no: 10 }} />

      <Person name={person} />
      <PersonList name={personlist} />

      <StatusofUser status={StatusState.Loading} />
      <StatusofUser status={StatusState.Success} />
      <StatusofUser status={StatusState.Error} />

      <Heading>Hi Hello</Heading>
      <Remi>
        <Heading>Hi Hello2</Heading>
      </Remi>

      <Button handleClick={() => HandleClick()} count={count}></Button>
      <Input  handleChange={(event)=> console.log(event)}  value='Remi'/>

      <StyleComponents  styles={{'color': "red", marginTop: 30 , backgroundColor: 'white'}}/>
      <UseStateExample/>

    </>
  )
}

export default App
