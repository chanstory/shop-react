import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

const propTypes = {
};
const defaultProps = {
};

@observer
class Row extends Component {
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
            self.property.productList = response.data.productList;

            for(var i=0; i<self.property.productList.length; i++){
                console.log(self.property.productList[i]);
            }
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

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="/productImages/imageTest.jpg" alt=""/></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

            </div>
        );
    }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
