import PropTypes from "prop-types"
import { memo } from "react"

// en casos como este en donde la info y/o sus props siempre son las mismas y NO HAY CONDICIONALES se puede hacer memo
const ListNames = memo(({ names }) => {
    console.log("render names")
    return <div>
        <ul>
            {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
    </div>
})

ListNames.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default ListNames;