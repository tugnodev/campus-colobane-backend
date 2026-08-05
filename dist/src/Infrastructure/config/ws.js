const webSocketInit = {
    app,
    baseUrl: `http://localhost:${3000}`,
};
export const { injectWebSocket, upgradeWebSocket, wss } = createNodeWebSocket(webSocketInit);
