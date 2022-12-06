export interface Message {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
}
declare class MessagesController {
    private id;
    private socket;
    private ping;
    users: unknown;
    connect(id: number): Promise<void>;
    sendMessage(message: string): void;
    loadOldMessages(): void;
    addUser(login: string): Promise<void>;
    deleteUser(userId: number): Promise<void>;
}
declare const controller: MessagesController;
export default controller;
