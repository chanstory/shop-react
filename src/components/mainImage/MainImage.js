import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
};
const defaultProps = {
};
class MainImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="my-4">
                <img src="/productImages/background.png"/>
            </div>
        );
    }
}
MainImage.propTypes = propTypes;
MainImage.defaultProps = defaultProps;
export default MainImage;
