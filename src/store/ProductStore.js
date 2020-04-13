import React from 'react';
import { observable, action } from 'mobx';

import Row from '../components/row/Row.js';
import ProductRepository from '../repository/ProductRepository.js';

class ProductStore {
    @observable
    productList : {};

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    getProduct(condition, value, component){
        var self = this;

        ProductRepository.getProduct(condition, value)
        .then(function (response) {
            //map메서드를 이용해 productList의 길이만큼 Row 컴포넌트를 생성
            var productList = response.data.list.map((product, index) =>
                <Row key={index} product={product}/>
            );

            component.renderProductList(productList);

        })
        .catch(function (error) {
            alert(error);
        })
        .then(function () {
            // always executed
        });
    }
}

export default ProductStore;
