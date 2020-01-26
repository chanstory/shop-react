import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const propTypes = {
};
const defaultProps = {
};

	

class App extends Component {
    constructor(props) {
        super(props);
		this.state = {
			data: ''
		};

		this.callApi = this.callApi.bind(this);
    }

	//api 테스트 로직
	callApi(){
    fetch("http://localhost:8081/rest")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json.test
        })
      })
  }

  componentDidMount() {
    this.callApi();
  }

    render() {
        return(
            <div>
              <Counter/>
			  <h3>{this.state.data ? this.state.data : '데이터 불러오는 중'}</h3>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
