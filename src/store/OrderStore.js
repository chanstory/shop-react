import React from 'react';
import { observable, action } from 'mobx';

import OrderRepository from '../repository/OrderRepository.js';

class OrderStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

}

export default OrderStore;
