// infrastructure/ws/WebSocketHandler.ts
import type { MessageUseCase } from "../../Application/usecases/messageUseCase.js"
import type { messageDto } from "../../Application/dtos/messages.js"

export class WebSocketHandler {
  private clients = new Map<string, WebSocket>()

  constructor(private sendMessage: MessageUseCase) {}

  onOpen(userId: string, ws: WebSocket) {
    this.clients.set(userId, ws)
    console.log(`✅ ${userId} connecté`)
  }

  async onMessage(raw: string) {
    const data: messageDto = JSON.parse(raw)
    const saved = await this.sendMessage.create(data)
    // Notifier le destinataire si connecté
    const receiverSocket = this.clients.get(data.receiver_id)
    if (receiverSocket) {
      receiverSocket.send(JSON.stringify(saved))
    }
  }

  onClose(userId: string) {
    this.clients.delete(userId)
    console.log(`❌ ${userId} déconnecté`)
  }

  getAllClients() {
    return this.clients
  }
}
