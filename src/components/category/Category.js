import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
};
const defaultProps = {
};
class Category extends Component {
    render() {
        return(
            <div className="list-group my-4">
                <Link className="list-group-item" to="/category-detail/cpu">CPU</Link>
                <Link className="list-group-item" to="/category-detail/graphicscard">그래픽카드</Link>
                <Link className="list-group-item" to="/category-detail/ram">램</Link>
            </div>
        );
    }
}
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
export default Category;
