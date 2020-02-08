import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
};
const defaultProps = {
};
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer className="py-5 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; 태찬컴퓨터 2019</p>
              </div>
              {/*.container end*/}
            </footer>
        );
    }
}
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;
