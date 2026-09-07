import { webSocketServer } from "../../index.js";
//const { upgradeWebSocket, wss } = webSocketServer;
export class MessageBroadcast {
    clients = new Map();
    async broadcast(message) {
        return JSON.stringify(message);
    }
}
