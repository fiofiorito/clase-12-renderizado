const Hi = ({ name }) => <h4>hi {name}</h4>
const Bye = ({ name }) => <h4>bye {name}</h4>

const TextConditional4 = ({ type, name }) => {
    // se le asigna al componente un componente en base al type
    const Component = type === "Hello" ? Hi : Bye
    return <div>
        <Component name={name} />
    </div>
}

export default TextConditional4;