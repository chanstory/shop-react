import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import LoginStore from '../../store/LoginStore.js';

const propTypes = {
};
const defaultProps = {
};

@inject('loginStore')
@observer
class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {signButton : ''};

    }

    componentDidMount(){
        this.setSignButton();
    }

    setSignButton(){
        const { loginStore } = this.props;

        if(loginStore.loginCheck()){
            this.setState({signButton : <Link className="nav-link" to="#" onClick={() => loginStore.logout(this)}>로그아웃</Link>});
        }else{
            this.setState({signButton : <Link className="nav-link" to="/login">로그인</Link>});
        }
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">태찬컴퓨터</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                {this.state.signButton}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/join">회원가입</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mypage">마이페이지</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">장바구니</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
export default Navigation;
