import type { NodeWebSocketInit } from "@hono/node-ws";

const webSocketInit: NodeWebSocketInit = {
  app,
  baseUrl: `http://localhost:${3000}`,
};
export const { injectWebSocket, upgradeWebSocket, wss } =
  createNodeWebSocket(webSocketInit);
