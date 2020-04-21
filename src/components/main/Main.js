import React, { Component } from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react';

import Navigation from '../navigation/Navigation';
import './Main.css';

import Category from '../category/Category';
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
        this.state = {image : '',
                      name : ''};
        this.child = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts(){
        const { productStore } = this.props;
        productStore.getProduct("count", 12, this.child.current, {withCredentials: true});
    }

    test(){
        console.log("dd");
        axios.post("http://localhost:8081/v1/product", this.state,
            {withCredentials :  true,
             headers:{'Content-Type' : 'multipart/form-data'}
        })
        .then(function (response) {
            console.log("success");
        })
        .catch(function (error) {
            alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
        })
        .then(function () {
        });
    }

    handleChange = (e) => {
        this.state[e.target.name] = e.target.value;
        console.log(this.state[e.target.name]);
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
                <input type="file" name="image" onChange={this.handleChange}/>
                <input type="text" name="name" onChange={this.handleChange}/>
                <input type="button" className="btn btn-dark col-lg-10" id="test" value="test" onClick={() => this.test(this)}></input>
            </div>
        );
    }
}
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
