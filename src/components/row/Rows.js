import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Row from './Row';

const propTypes = {
};
const defaultProps = {
};

@observer
class Rows extends Component {
    @observable
    property = {
        productList : ''
    };

    constructor(props) {
        super(props);
    }

    @action
    componentDidMount(){
        var self = this;

        axios.get("http://localhost:8081/products")
        .then(function (response) {

            //map메서드를 이용해 productList의 길이만큼 Row 컴포넌트를 생성
            self.property.productList = response.data.productList.map((product, index) =>
                <Row key={index} product={product}/>
            );

        })
        .catch(function (error) {
            alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
        })
        .then(function () {
            // always executed
        });
    }

    render() {
        return(
            <div className="row">
                {this.property.productList}
            </div>
        );
    }
}

Rows.propTypes = propTypes;
Rows.defaultProps = defaultProps;
export default Rows;
