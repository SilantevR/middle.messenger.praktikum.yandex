export default class Messenger {
    private socketInst;
    loadMessages: number;
    loadedMessages: any;
    constructor(userId: number, chatId: number, token: string);
    onopen(): void;
    getMessages(): void;
    close(): void;
    error(e: Event): void;
    onmessage(event: MessageEvent): void;
    send(data: string): void;
}
