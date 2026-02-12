import type { Message } from "../../Domaine/entities/message.js";
import { webSocketServer } from "../../index.js";
import type {
  OMessageRepo,
  OMessageBroadcast,
} from "../../Domaine/ports/outputs/messageRepo.js";
import type { broadcastMessageDto } from "../../Application/dtos/messages.js";

//const { upgradeWebSocket, wss } = webSocketServer;

export class MessageBroadcast implements OMessageBroadcast {
  private clients = new Map<string, WebSocket>();
  async broadcast(message: broadcastMessageDto): Promise<any> {
    return JSON.stringify(message);
  }
}
