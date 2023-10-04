import PropTypes from "prop-types";

const TextConditional5 = ({ condition, num }) => {
    if (condition) {
        return <h2>If unico= Condition is true</h2>
    }
    return <div>
        <h2>If unico= Condition is false</h2>
        <p>total: {2 + num}</p>

    </div>
}

// el tipeo de props permite que definamos un tipo de dato exacto para cada props de un componente
TextConditional5.propTypes = {
    condition: PropTypes.bool.isRequired,
    num: PropTypes.number
}
export default TextConditional5;