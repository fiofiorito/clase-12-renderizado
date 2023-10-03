const TextConditional2 = ({ condition }) => {
    // se declaran ambos booleanos
    return <div>
        {condition && <h2>&&= Condition is true</h2>}
        {!condition && <h2>&&= Condition is false</h2>}
    </div>
}

export default TextConditional2;