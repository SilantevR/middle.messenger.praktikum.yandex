import { EventBus } from './event_bus';
import set from './set';

export enum StoreEvents {
  // eslint-disable-next-line no-unused-vars
    Updated = 'Updated'
}

export class Store extends EventBus {
  public state: any = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: any) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated, this.getState());
  }
}

const store = new Store();

export default store;
