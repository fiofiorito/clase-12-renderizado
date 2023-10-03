const TextConditional1 = ({ condition }) => {
    // if con return temprano

    // se declara solo uno, en este caso si es true, la ejecucion se
    // frena en el if y muestra "Condition is true", si fuese false entonces sigue hasta abajo
    if (condition) {
        return <h2>If unico= Condition is true</h2>
    }
    return <div>
        <h2>If unico= Condition is false</h2>
    </div>
}

export default TextConditional1;