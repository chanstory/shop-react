import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { Link, withRouter } from 'react-router-dom';

const propTypes = {
};
const defaultProps = {
};

@observer
class Login extends Component {
    @observable
    property = {
        loginId : '',
        loginPassword : ''
    };

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    @action
    handleChange = (e) => {
        this.property[e.target.name] = e.target.value;
    }

    login(){
        if(this.property.loginId === ''){
            alert('아이디를 입력해주세요');
            return;
        }
        if(this.property.loginPassword === ''){
            alert('비밀번호를 입력해주세요');
            return;
        }

        var self = this;
        axios.post("http://localhost:8081/login", {
            loginId : self.property.loginId,
            loginPassword : self.property.loginPassword
        })
        .then(function (response) {
            if(response.data.result === 'success'){
                self.props.history.push("/main");
            }else if(response.data.result === 'notMatch'){
                alert('비밀번호를 확인해 주십시오');
            }else if(response.data.result === 'doesNotExist'){
                alert('존재하지 않는 사용자 입니다');
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
            <div>
                <div>
                    <input type="text" name ="loginId" id="loginId" placeholder="id" onChange={this.handleChange}></input>
                    <input type="button" id="login" value="login" onClick={this.login}></input>
                </div>
                <div>
                    <input type="password" name="loginPassword" id="loginPassword" placeholder="password" onChange={this.handleChange}></input>
                </div>
                <div>
                    <Link to="/join"><input type="button" id="join" value="회원가입"></input></Link>
                </div>
            </div>
        );
    }
}
export default Login;
