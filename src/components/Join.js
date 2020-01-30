import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const propTypes = {
};
const defaultProps = {
};
class Join extends Component {
    constructor(props) {
        super(props);

        this.state = {
            duplicateValue : 'unChecked',
            joinId : ''
		};

        this.duplicateCheck = this.duplicateCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    duplicateCheck(){

        var idReg = /^[A-za-z0-9]{5,15}$/g;
        if(!idReg.test(this.state.joinId)){
            alert("아이디는 5~15자리의 영어대문자, 영어소문자, 숫자의 조합으로 이루어져야 합니다.");
            return;
        }

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
            console.log(error);
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
    }

    render() {
        return(
            <div>
                <h1>회원가입</h1>
                <div>
                    <h5>아이디</h5>
                    <input type="text" name="joinId" id="joinId" maxLength="15" onChange={this.handleChange} placeholder="아이디를 입력해주세요"></input>
                    <input type="button" name="duplicateCheck" value="중복체크" onClick={this.duplicateCheck}></input>
                </div>
                <div>
                    <h5>비밀번호</h5>
                    <input type="password" name="joinPassword" placeholder="비밀번호를 입력해주세요"></input>
                </div>
                <div>
                    <h5>비밀번호 재확인</h5>
                    <input type="password" name="duplicatePassword" placeholder="비밀번호를 재입력해주세요"></input>
                </div>
                <div>
                    <h5>생년월일</h5>
                    <input type="text" name="birthDateYear" placeholder="년도(4자리)"></input>
                    <input type="text" name="birthDateMonth" placeholder="월"></input>
                    <input type="text" name="birthDateDay" placeholder="일"></input>
                </div>
                <div>
                    <h5>휴대전화</h5>
                    <input type="text" name="phoneNumber" placeholder="전화번호를 입력해주세요"></input>
                </div>
                <div>
                    <h5>이메일</h5>
                    <input type="text" name="email" placeholder="이메일을 입력해주세요"></input>
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
