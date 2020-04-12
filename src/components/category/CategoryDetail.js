import React, { Component } from 'react';

import './CategoryDetail.css';

import Navigation from '../navigation/Navigation';
import Category from '../category/Category';
import Footer from '../footer/Footer';
import Rows from '../row/Rows';

const propTypes = {
};
const defaultProps = {
};
class CategoryDetail extends Component {
    render() {
        return(
            <div className="categoryDetail">

                <Navigation/>
                {/*Page Content*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Category/>
                        </div>
                        {/*.col-lg-3 end*/}
                        <div className="col-lg-9">
                            <Rows condition="kind" value={this.props.match.params.item}/>
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

CategoryDetail.propTypes = propTypes;
CategoryDetail.defaultProps = defaultProps;
export default CategoryDetail;
