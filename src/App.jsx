import './App.css'
import TextConditional1 from './components/TextConditional1'
import TextConditional2 from './components/TextConditional2'
import TextConditional3 from './components/TextConditional3'
import TextConditional4 from './components/TextoConditional4'

function App() {
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
  </>
}

export default App
