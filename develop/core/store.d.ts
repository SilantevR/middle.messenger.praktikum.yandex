import { EventBus } from './event_bus';
export declare enum StoreEvents {
    Updated = "Updated"
}
export declare class Store extends EventBus {
    state: any;
    getState(): any;
    set(path: string, value: any): void;
}
declare const store: Store;
export default store;
