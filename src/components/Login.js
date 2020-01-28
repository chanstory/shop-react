import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
};
const defaultProps = {
};
class Login extends Component {
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

    render() {
        return(
            <div>
                <input type="text" id="loginId" placeholder="id"></input>
                <input type="password" id="loginPassword" placeholder="password"></input>
                <input type="button" id="login" value="login" onClick={this.callApi}></input>
                <h3>{this.state.data ? this.state.data : '데이터 불러오는 중'}</h3>
            </div>
        );
    }
}
export default Login;
