const TextConditional3 = ({ condition }) => {
    // condition usando ternary operator
    return <>
        <div>
            {
                condition ?
                    <h2>Ternary= Condition is true</h2>
                    :
                    <h2>Ternary= Condition is false</h2>
            }
        </div>
        <div>
            {
                <h2>Ternary op 2= Condition is {condition ? "True" : "False"}</h2>
            }
        </div>
    </>
}

export default TextConditional3;