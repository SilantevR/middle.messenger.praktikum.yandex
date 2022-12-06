declare class ChatsController {
    private api;
    constructor();
    addChat(title: string): Promise<void>;
    removeChat(id: string): Promise<void>;
    getChats(): Promise<void>;
    updateChat(chatId: number, userId: number): Promise<void>;
    getUsers(chatId: number): Promise<unknown>;
    deleteUser(chatId: number, userId: number): Promise<unknown>;
    chatToken(id: number): Promise<unknown>;
}
declare const _default: ChatsController;
export default _default;
