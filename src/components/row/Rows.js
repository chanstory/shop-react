import React, { Component } from 'react';

import axios from 'axios';

import { observer, inject } from 'mobx-react';


const propTypes = {
};
const defaultProps = {
};

@inject('productStore')
@observer
class Rows extends Component {
    constructor(props) {
        super(props);

        this.state = {productList : []};
    }

    renderProductList(productList){
        this.setState({productList : productList});
    }

    render() {
        return (
            <div className="row my-4">
                {this.state.productList}
            </div>
        );
    }
}

Rows.propTypes = propTypes;
Rows.defaultProps = defaultProps;
export default Rows;
