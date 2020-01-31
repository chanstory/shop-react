import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

const propTypes = {
};
const defaultProps = {
};

@observer
class Join extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            duplicateValue : 'unChecked',
            joinId : '',
            joinPassword : '',
            duplicatePassword : '',
            birthDateYear : '',
            birthDateMonth : '',
            birthDateDay : '',
            phoneNumber : '',
            email : ''
		};

        this.idDuplicateCheck = this.idDuplicateCheck.bind(this);
        this.pwDuplicateCheck = this.pwDuplicateCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    idDuplicateCheck(){
        //id validation check 영어대소문자, 숫자만으로 5~15자리
        var idReg = /^[A-za-z0-9]{5,15}$/g;
        if(!idReg.test(this.state.joinId)){
            alert("아이디는 5~15자리의 영어대문자, 영어소문자, 숫자의 조합으로 이루어져야 합니다.");
            return;
        }

        //then 안에서 this로 접근시 Join의 state에 접근이 불가하기 때문에 this를 self변수에 선언함
        var self = this;
        axios.get("http://localhost:8081/id-duplicate?joinId=" + this.state.joinId)
        .then(function (response) {
            if(response.data.duplicateResult === 'available'){
                alert('사용가능한 아이디 입니다..');
                document.getElementById('joinId').readOnly = true;

                self.setState({duplicateValue: 'checked'});

            }else if(response.data.duplicateResult === 'canNotUsed'){
                alert('중복된 아이디가 있습니다.');
            }
        })
        .catch(function (error) {
            alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
        })
        .then(function () {
            // always executed
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.joinPassword);
        console.log(this.state.duplicatePassword);
        if(e.target.name === 'joinPassword' || e.target.name === 'duplicatePassword'){
            this.pwDuplicateCheck();
        }
    }

    pwDuplicateCheck(){
        if(document.getElementById('pwDuplicate') == null){
            var pwDuplicate = document.createElement('span');
            pwDuplicate.setAttribute("id", "pwDuplicate");
            document.getElementById('pwDupDiv').appendChild(pwDuplicate);
        }
        console.log(this.state.joinPassword);
        console.log(this.state.duplicatePassword);
        if(this.state.joinPassword != this.state.duplicatePassword){
            document.getElementById('pwDuplicate').innerHTML = '비밀번호가 일치하지 않습니다.';
            console.log("불일치");
        }else{
            document.getElementById('pwDuplicate').innerHTML = '비밀번호가 일치합니다.';
            console.log("일치");
        }
    }

    render() {
        return(
            <div>
                <h1>회원가입</h1>
                <div>
                    <h5>아이디</h5>
                    <input type="text" name="joinId" id="joinId" maxLength="15" onChange={this.handleChange} placeholder="아이디를 입력해주세요"></input>
                    <input type="button" name="duplicateCheck" value="중복체크" onClick={this.idDuplicateCheck}></input>
                </div>
                <div>
                    <h5>비밀번호</h5>
                    <input type="password" name="joinPassword" maxLength="15" onChange={this.handleChange} placeholder="비밀번호를 입력해주세요"></input>
                </div>
                <div id="pwDupDiv">
                    <h5>비밀번호 재확인</h5>
                    <input type="password" name="duplicatePassword" maxLength="15" onChange={this.handleChange} placeholder="비밀번호를 재입력해주세요"></input>
                </div>
                <div>
                    <h5>생년월일</h5>
                    <input type="text" name="birthDateYear" maxLength="4" onChange={this.handleChange} placeholder="년도(4자리)"></input>
                    <input type="text" name="birthDateMonth" maxLength="2" onChange={this.handleChange} placeholder="월"></input>
                    <input type="text" name="birthDateDay" maxLength="2" onChange={this.handleChange} placeholder="일"></input>
                </div>
                <div>
                    <h5>휴대전화(-없이 입력)</h5>
                    <input type="text" name="phoneNumber" maxLength="11" onChange={this.handleChange} placeholder="전화번호를 입력해주세요"></input>
                </div>
                <div>
                    <h5>이메일</h5>
                    <input type="text" name="email" onChange={this.handleChange} placeholder="이메일을 입력해주세요"></input>
                </div>
                <div>
                    <input type="button" name="joinButton" value="가입하기"></input>
                </div>
            </div>
        );
    }
}

Join.propTypes = propTypes;
Join.defaultProps = defaultProps;
export default Join;
