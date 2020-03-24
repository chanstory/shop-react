import React, { Component } from 'react';

const propTypes = {
};
const defaultProps = {
};
class Row extends Component {
    constructor(props) {
        super(props);
        this.props.product.imageName = '/productImages/' + this.props.product.imageName;

        this.KRWFormat = this.KRWFormat.bind(this);
    }

    KRWFormat(number){
        if(number === 0) return 0;

        var reg = /(^[+-]?\d+)(\d{3})/;
        var n = (number + '');

        while (reg.test(n)) {
            n = n.replace(reg, '$1' + ',' + '$2');
        }
        
        return n;
    };

    render() {
        return(
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src={this.props.product.imageName} alt=""/></a>
                <div className="card-body">
                  <h6 className="card-title">
                    <a href="#">{this.props.product.name}</a>
                  </h6>
                  <h6>{this.KRWFormat(this.props.product.price)}원</h6>
                  <p className="card-text">{this.props.product.description}</p>
                </div>
              </div>
            </div>
        );
    }
}
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
