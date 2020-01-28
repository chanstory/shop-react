import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Login from './Login';

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
			  <Login/>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
