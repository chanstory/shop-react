import CounterStore from './LoginStore';

class RootStore {
    constructor() {
        this.login = new MarketStore(this);
    }
}

export default RootStore;
