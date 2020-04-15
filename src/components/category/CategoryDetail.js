import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import './CategoryDetail.css';

import Navigation from '../navigation/Navigation';
import Category from '../category/Category';
import Footer from '../footer/Footer';
import Rows from '../row/Rows';

const propTypes = {
};
const defaultProps = {
};

@inject('productStore')
@observer
class CategoryDetail extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate() {
        this.getProducts();
    }

    getProducts(){
        const { productStore } = this.props;
        productStore.getProduct("kind", this.props.match.params.item, this.child.current);
    }

    render() {
        return (
            <div className="categoryDetail">
                {/*Page Content*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Category/>
                        </div>
                        {/*.col-lg-3 end*/}
                        <div className="col-lg-9">
                            <Rows ref={this.child}/>
                            {/*.row end*/}
                        </div>
                        {/*.col-lg-9 end*/}
                    </div>
                    {/*.row end*/}
                </div>
                {/*.container end*/}
            </div>
        );
    }
}

CategoryDetail.propTypes = propTypes;
CategoryDetail.defaultProps = defaultProps;
export default CategoryDetail;
