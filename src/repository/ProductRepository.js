import axios from 'axios';

class ProductRepository {
    URL = "http://localhost:8081/v1/";

    constructor() {
    }

    getProduct(condition, value){
        return axios.get(this.URL + "products/" + condition
                                          + "/" + value, {withCredentials :  true});
    }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new ProductRepository();
