import { observable, action } from 'mobx';

import UserRepository from '../repository/UserRepository.js';

class UserStore {
    @observable
    idDuplicateValue : 'unChecked';

    @observable
    pwDuplicateValue : 'unChecked';

    @observable
    joinId : '';

    @observable
    joinPassword : '';

    @observable
    duplicatePassword : '';

    @observable
    name : '';

    @observable
    birthDate : '';

    @observable
    phoneNumber : '';

    @observable
    address : '';

    @observable
    email : '';


    constructor(rootStore) {
        this.rootStore = rootStore;

        this.idDuplicateCheck = this.idDuplicateCheck.bind(this);
        this.join = this.join.bind(this);
    }


    @action
    handleChange = (e) => {
        this[e.target.name] = e.target.value;

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
        if(!pwReg.test(this.joinPassword)){
            document.getElementById('pwDuplicate').innerHTML = '비밀번호는 영문, 숫자, 특수문자가 1개이상씩 포함되어 8~15 자리여야 합니다.';
            document.getElementById('pwDuplicate').setAttribute("style", "font-size: small; color: red");
            this.pwDuplicateValue = 'unChecked';
            return;
        }

        if(this.joinPassword !== this.duplicatePassword){
            document.getElementById('pwDuplicate').innerHTML = '비밀번호가 일치하지 않습니다.';
            document.getElementById('pwDuplicate').setAttribute("style", "font-size: small; color: red");
            this.pwDuplicateValue = 'unChecked';

        }else{
            document.getElementById('pwDuplicate').innerHTML = '비밀번호가 일치합니다.';
            document.getElementById('pwDuplicate').setAttribute("style", "font-size: small; color: blue");
            this.pwDuplicateValue = 'checked';
        }
    }

    @action
    idDuplicateCheck(){
        //id validation check 영어대소문자, 숫자만으로 5~15자리
        var idReg = /^[A-za-z0-9]{5,15}$/g;

        if(!this.joinId || !idReg.test(this.joinId)){
            alert('아이디는 5~15자리의 영어대문자, 영어소문자, 숫자의 조합으로 이루어져야 합니다.');
            return;
        }

        //then 안에서 this로 접근시 Join의 state에 접근이 불가하기 때문에 this를 self변수에 선언함
        var self = this;

        UserRepository.idDuplicateCheck(this.joinId)
        .then(function (response) {
            if(response.data.success === true){
                alert('사용가능한 아이디 입니다.');
                self.idDuplicateValue = 'checked';
                document.getElementById('joinId').readOnly = true;

            }else{
                alert('중복된 아이디가 있습니다.');
                self.idDuplicateValue = 'unChecked';
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

        if(this.idDuplicateValue === 'unChecked'){
            alert('아이디 중복체크를 해주세요.');
            return;
        }
        if(this.pwDuplicateValue === 'unChecked'){
            alert('비밀번호를 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(this.name === ''){
            alert('이름을 입력해주세요.');
            return;
        }
        if(!birthReg.test(this.birthDate)){
            alert('생년월일을 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(!phoneReg.test(this.phoneNumber)){
            alert('전화번호를 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(this.address === ''){
            alert('주소를 제대로 입력했는지 확인해주세요.');
            return;
        }
        if(!emailReg.test(this.email)){
            alert('이메일을 제대로 입력했는지 확인해주세요.');
            return;
        }

        var self = this;
        UserRepository.join({
            joinId : self.joinId,
            joinPassword : self.joinPassword,
            name : self.name,
            birthDate : self.birthDate,
            phoneNumber : self.phoneNumber,
            address : self.address,
            email : self.email
        })
        .then(function (response) {
            if(response.data.result === 'success'){
                alert('회원가입이 완료되었습니다.');
                self.props.history.push("/");
            }else{
                alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
            }
        })
        .catch(function (error) {
            alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
        })
        .then(function () {
            // always executed
        });
    }
}

export default UserStore;
