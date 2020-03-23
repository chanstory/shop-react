import React, { Component} from 'react';
import axios from 'axios';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

import './Join.css';

const propTypes = {
};
const defaultProps = {
};

@observer
class Join extends Component {
    @observable
    property = {
        idDuplicateValue : 'unChecked',
        pwDuplicateValue : 'unChecked',
        joinId : '',
        joinPassword : '',
        duplicatePassword : '',
        name : '',
        birthDate : '',
        phoneNumber : '',
        address : '',
        email : ''
    };

    constructor(props) {
        super(props);
        this.idDuplicateCheck = this.idDuplicateCheck.bind(this);
        this.passwordCheck = this.passwordCheck.bind(this);
        this.join = this.join.bind(this);
    }

    @action
    handleChange = (e) => {
        this.property[e.target.name] = e.target.value;

        if(e.target.name === 'joinPassword' || e.target.name === 'duplicatePassword'){
            this.passwordCheck();
        }
    }

    @action
    passwordCheck(){
        if(document.getElementById('pwDuplicate') == null){
            var pwDuplicate = document.createElement('span');
            pwDuplicate.setAttribute("id", "pwDuplicate");
            pwDuplicate.setAttribute("class", "col-lg-12 text-center");
            document.getElementById('pwDupDiv').appendChild(pwDuplicate);
        }

        var pwReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        if(!pwReg.test(this.property.joinPassword)){
            document.getElementById('pwDuplicate').innerHTML = '비밀번호는 영문, 숫자, 특수문자가 1개이상씩 포함되어 8~15 자리여야 합니다.';
            document.getElementById('pwDuplicate').setAttribute("style", "font-size: small; color: red");
            this.property.pwDuplicateValue = 'unChecked';
            return;
        }


        if(this.property.joinPassword !== this.property.duplicatePassword){
            document.getElementById('pwDuplicate').innerHTML = '비밀번호가 일치하지 않습니다.';
            document.getElementById('pwDuplicate').setAttribute("style", "font-size: small; color: red");
            this.property.pwDuplicateValue = 'unChecked';

        }else{
            document.getElementById('pwDuplicate').innerHTML = '비밀번호가 일치합니다.';
            document.getElementById('pwDuplicate').setAttribute("style", "font-size: small; color: blue");
            this.property.pwDuplicateValue = 'checked';
        }
    }

    idDuplicateCheck(){
        //id validation check 영어대소문자, 숫자만으로 5~15자리
        var idReg = /^[A-za-z0-9]{5,15}$/g;

        if(!idReg.test(this.property.joinId)){
            alert('아이디는 5~15자리의 영어대문자, 영어소문자, 숫자의 조합으로 이루어져야 합니다.');
            return;
        }

        //then 안에서 this로 접근시 Join의 state에 접근이 불가하기 때문에 this를 self변수에 선언함
        var self = this;

        axios.get("http://localhost:8081/v1/user/duplicate-check/" + this.property.joinId)
        .then(function (response) {
            if(response.data.duplicateResult === 'available'){
                alert('사용가능한 아이디 입니다.');
                self.property.idDuplicateValue = 'checked';
                document.getElementById('joinId').readOnly = true;

            }else if(response.data.duplicateResult === 'canNotUsed'){
                alert('중복된 아이디가 있습니다.');
                self.property.idDuplicateValue = 'unChecked';
            }
        })
        .catch(function (error) {
            alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
        })
        .then(function () {
            // always executed
        });
    }

    join(){
        var birthReg = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
        var phoneReg = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]{3,4})([0-9]{4})/g;
        var emailReg = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/g;

        if(this.property.idDuplicateValue === 'unChecked'){
            alert('아이디 중복체크를 해주세요.');
            return;
        }
        if(this.property.pwDuplicateValue === 'unChecked'){
            alert('비밀번호를 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(this.property.name === ''){
            alert('이름을 입력해주세요.');
            return;
        }
        if(!birthReg.test(this.property.birthDate)){
            alert('생년월일을 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(!phoneReg.test(this.property.phoneNumber)){
            alert('전화번호를 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(this.property.address === ''){
            alert('주소를 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(!emailReg.test(this.property.email)){
            alert('이메일을 제대로 입력했는지 확인해주세요.');
            return;
        }

        var self = this;
        axios.post("http://localhost:8081/user", {
            joinId : self.property.joinId,
            joinPassword : self.property.joinPassword,
            name : self.property.name,
            birthDate : self.property.birthDate,
            phoneNumber : self.property.phoneNumber,
            address : self.property.address,
            email : self.property.email
        })
        .then(function (response) {
            if(response.data.result === 'success'){
                alert('회원가입이 완료되었습니다.');
                self.props.history.push("/");
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
                <Navigation/>
                <div class="border border-dark rounded joinForm">
                    <div class="font-weight-bold text-center m-5">
                        SIGN UP
                    </div>
                    <div class="row mt-5 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">아이디</h6>
                        <input type="text" name="joinId" id="joinId" class="form-control col-lg-5 mr-1" maxLength="15" onChange={this.handleChange} placeholder="아이디를 입력해주세요"></input>
                        <input type="button" name="duplicateCheck" class="btn btn-dark col-lg-2" value="중복체크" onClick={this.idDuplicateCheck}></input>
                    </div>
                    <div class="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">비밀번호</h6>
                        <input type="password" name="joinPassword" class="form-control col-lg-7" maxLength="15" onChange={this.handleChange} placeholder="비밀번호를 입력해주세요"></input>
                    </div>
                    <div id="pwDupDiv" class="row">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">비밀번호 재확인</h6>
                        <input type="password" name="duplicatePassword" class="form-control col-lg-7" maxLength="15" onChange={this.handleChange} placeholder="비밀번호를 재입력해주세요"></input>
                    </div>
                    <div class="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">이름</h6>
                        <input type="text" name="name" class="form-control col-lg-7" onChange={this.handleChange} placeholder="이름을 입력해주세요"></input>
                    </div>
                    <div class="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">생년월일</h6>
                        <input type="text" name="birthDate" class="form-control col-lg-7" maxLength="8" onChange={this.handleChange} placeholder="생년월일(8자리)"></input>
                    </div>
                    <div class="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">휴대전화(-없이입력)</h6>
                        <input type="text" name="phoneNumber" class="form-control col-lg-7" maxLength="11" onChange={this.handleChange} placeholder="전화번호를 입력해주세요"></input>
                    </div>
                    <div class="row mt-2 mb-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">주소</h6>
                        <input type="text" name="address" class="form-control col-lg-7" nChange={this.handleChange} placeholder="주소를 입력해주세요"></input>
                    </div>
                    <div class="row mt-2">
                        <h6 className="col-lg-4 ml-1 mb-0 align-self-center">이메일</h6>
                        <input type="text" name="email" class="form-control col-lg-7" onChange={this.handleChange} placeholder="이메일을 입력해주세요"></input>
                    </div>
                    <div class="text-center m-2 mt-4">
                        <input type="button" class="btn btn-dark col-lg-5" name="joinButton" value="가입하기" onClick={this.join}></input>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

Join.propTypes = propTypes;
Join.defaultProps = defaultProps;
export default Join;
