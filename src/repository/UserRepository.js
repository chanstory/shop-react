import axios from 'axios';

class UserRepository {
    URL = "http://localhost:8081/v1/";

    constructor() {
    }

    idDuplicateCheck(id){
        return axios.get(this.URL + "user/duplicate-check/" + id, {withCredentials :  true});
    }

    join(params){
        return axios.post(this.URL + "join", params, {withCredentials :  true});
    }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new UserRepository();
