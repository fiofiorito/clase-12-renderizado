import { useState } from "react";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import PropTypes from 'prop-types';

const Loader = ({ loading }) => {
    // const [loading, setLoading] = useState(true)
    if (loading) {
        return <ClimbingBoxLoader />
    }

    return null


}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Loader;