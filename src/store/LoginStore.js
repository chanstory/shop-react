import { observable, action } from 'mobx';

import LoginRepository from '../repository/LoginRepository.js';

class LoginStore {
    @observable
    loginId : '';

    @observable
    loginPassword : '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }


    @action
    handleChange = (e) => {
        this.property[e.target.name] = e.target.value;
    }

    
    login(id, password, component){
        if(this.property.loginId === ''){
            alert('아이디를 입력해주세요');
            return;
        }

        if(this.property.loginPassword === ''){
            alert('비밀번호를 입력해주세요');
            return;
        }

        LoginRepository.login()
        .then(function (response) {
            console.log(response.data);
            if(response.data.success === true){
                component.props.history.push("/");
            }else{
                alert(response.data.msg);
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

export default LoginStore;
