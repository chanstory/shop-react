import React, { Component } from 'react';

const propTypes = {
};
const defaultProps = {
};
class Category extends Component {
    render() {
        return(
            <div className="list-group my-4">
                <a href="/category-detail/cpu" className="list-group-item">CPU</a>
                <a href="/category-detail/graphicscard" className="list-group-item">그래픽카드</a>
                <a href="/category-detail/ram" className="list-group-item">램</a>
            </div>
        );
    }
}
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;
export default Category;
