import LoginStore from './LoginStore.js';
import UserStore from './UserStore.js';
import ProductStore from './ProductStore.js';
import OrderStore from './OrderStore.js';

class RootStore {
    constructor() {
        this.login = new LoginStore(this);
        this.user = new UserStore(this);
        this.product = new ProductStore(this);
        this.order = new OrderStore(this);
    }
}

export default RootStore;
