export declare class EventBus {
    private listeners;
    constructor();
    on(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
    emit(event: string, ...args: unknown[]): void;
}
