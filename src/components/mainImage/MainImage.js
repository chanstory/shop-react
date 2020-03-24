import React, { Component } from 'react';


const propTypes = {
};
const defaultProps = {
};
class MainImage extends Component {
    render() {
        return(
            <div className="my-4">
                <img src="/productImages/background.png" alt=""/>
            </div>
        );
    }
}
MainImage.propTypes = propTypes;
MainImage.defaultProps = defaultProps;
export default MainImage;
