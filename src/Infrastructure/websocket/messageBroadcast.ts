import type { Message } from "../../Domaine/entities/message.js";
import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";

export class WebSocketHandler {
  private clients = new Map<string, WebSocket>();
  private messageRepo: OMessageRepo;
  constructor(repo: OMessageRepo) {
    this.messageRepo = repo;
  }

  onOpen(userId: string, ws: WebSocket) {
    this.clients.set(userId, ws);
    console.log(`✅ ${userId} connecté`);
  }

  async onMessage(raw: string) {
    const data: Message = JSON.parse(raw);
    // Notifier le destinataire si connecté
    const receiverSocket = this.clients.get(data.userId);
    if (receiverSocket) {
      receiverSocket.send(JSON.stringify(data));
    }
  }

  onClose(userId: string) {
    this.clients.delete(userId);
    console.log(`❌ ${userId} déconnecté`);
  }

  getAllClients() {
    return this.clients;
  }
}
