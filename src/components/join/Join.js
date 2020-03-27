import React, { Component} from 'react';

import { observer } from 'mobx-react';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

import './Join.css';

import UserStore from '../../store/UserStore.js';

const userStore = new UserStore();

@observer
class Join extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navigation/>
                <div className="border border-dark rounded joinForm">
                    <div className="font-weight-bold text-center m-5">
                        SIGN UP
                    </div>
                    <div className="row mt-5 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">아이디</h6>
                        <input type="text" name="joinId" id="joinId" className="form-control col-lg-5 mr-1" maxLength="15" onChange={userStore.handleChange} placeholder="아이디를 입력해주세요"></input>
                        <input type="button" name="duplicateCheck" className="btn btn-dark col-lg-2" value="중복체크" onClick={userStore.idDuplicateCheck}></input>
                    </div>
                    <div className="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">비밀번호</h6>
                        <input type="password" name="joinPassword" className="form-control col-lg-7" maxLength="15" onChange={userStore.handleChange} placeholder="비밀번호를 입력해주세요"></input>
                    </div>
                    <div id="pwDupDiv" className="row">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">비밀번호 재확인</h6>
                        <input type="password" name="duplicatePassword" className="form-control col-lg-7" maxLength="15" onChange={userStore.handleChange} placeholder="비밀번호를 재입력해주세요"></input>
                    </div>
                    <div className="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">이름</h6>
                        <input type="text" name="name" className="form-control col-lg-7" onChange={userStore.handleChange} placeholder="이름을 입력해주세요"></input>
                    </div>
                    <div className="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">생년월일</h6>
                        <input type="text" name="birthDate" className="form-control col-lg-7" maxLength="8" onChange={userStore.handleChange} placeholder="생년월일(8자리)"></input>
                    </div>
                    <div className="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">휴대전화(-없이입력)</h6>
                        <input type="text" name="phoneNumber" className="form-control col-lg-7" maxLength="11" onChange={userStore.handleChange} placeholder="전화번호를 입력해주세요"></input>
                    </div>
                    <div className="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">주소</h6>
                        <input type="text" name="address" className="form-control col-lg-7" onChange={userStore.handleChange} placeholder="주소를 입력해주세요"></input>
                    </div>
                    <div className="row mt-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">이메일</h6>
                        <input type="text" name="email" className="form-control col-lg-7" onChange={userStore.handleChange} placeholder="이메일을 입력해주세요"></input>
                    </div>
                    <div className="text-center m-2 mt-4">
                        <input type="button" className="btn btn-dark col-lg-5" name="joinButton" value="가입하기" onClick={userStore.join}></input>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Join;
