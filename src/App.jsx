import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import TextConditional1 from './components/TextConditional1'
import TextConditional2 from './components/TextConditional2'
import TextConditional3 from './components/TextConditional3'
import TextConditional5 from './components/TextConditional5'
import TextConditional4 from './components/TextoConditional4'
import ListNames from './components/ListNames'

function App() {
  const [names, setNames] = useState([
    "AAA",
    "BBB",
    "CCC",
    "DDD"
  ])
  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount(count + 1)
  }

  return <>
    <h1>Clase 12</h1>
    {/* al NO pasarle una condition como prop es false,
    si SI se le pasa entonces la condition es true.
    Tambien se le puede dar un valor tipo condition={true/false} */}
    <TextConditional1 condition /> {/* true */}
    <TextConditional2 /> {/* false */}
    <TextConditional3 condition={true} /> {/* true */}
    {/* almacenar componentes dentro de una constante */}
    <TextConditional4 type={"Hello"} name={"FF"} />
    <TextConditional4 type={"Bye"} name={"FF"} />
    {/* Prop types */}
    <h1>Prop types</h1>
    <TextConditional5 condition={false} num={11} />
    <Loader loading={true} />
    <button onClick={onAdd}>Al hacer click se renderiza todo de nuevo menos memo</button>
    <p>{count}</p>
    <button onClick={() => { setNames([...names, "EEE"]) }} >Agregar otro nombre para renderizar memo</button>
    <ListNames names={names} />



  </>
}

export default App
