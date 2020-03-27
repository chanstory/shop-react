import LoginStore from './LoginStore.js';
import UserStore from './UserStore.js';
class RootStore {
    constructor() {
        this.login = new LoginStore(this);
        this.user = new UserStore(this);
    }
}

export default RootStore;
