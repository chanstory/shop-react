import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import './Main.css';

import Navigation from '../navigation/Navigation';
import Category from '../category/Category';
import Footer from '../footer/Footer';
import MainImage from '../mainImage/MainImage';
import Rows from '../row/Rows';

const propTypes = {
};
const defaultProps = {
};

@inject('productStore')
@observer
class Main extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts(){
        const { productStore } = this.props;
        productStore.getProduct("count", 12, this.child.current);
    }

    render() {
        return(
            <div className="main">
                <Navigation/>
                {/*Page Content*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Category/>
                        </div>
                        {/*.col-lg-3 end*/}
                        <div className="col-lg-9">
                            <MainImage/>
                            <Rows ref={this.child}/>
                            {/*.row end*/}
                        </div>
                        {/*.col-lg-9 end*/}
                    </div>
                    {/*.row end*/}
                </div>
                {/*.container end*/}
                <Footer/>
            </div>
        );
    }
}
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
