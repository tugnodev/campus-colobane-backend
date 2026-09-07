import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import { OrderStatus } from "../../Domaine/entities/orders.js";
const prisma = new PrismaClient();
export class OrderRepoImpl {
    async saveOrder(order) {
        try {
            const created = await prisma.orders.create({
                data: {
                    articleDetails: order.articleDetails,
                    buyerId: order.buyerId,
                    sellerId: order.sellerId,
                    status: OrderStatus.ATTENTE,
                },
            });
            return created;
        }
        catch (error) {
            console.error(error);
            return "Error creating order";
        }
    }
    async updateOrder(order) {
        try {
            const { id, ...data } = order;
            const updated = await prisma.orders.update({
                where: { id },
                data: {
                    articleDetails: data.articleDetails,
                    buyerId: data.buyerId,
                    sellerId: data.sellerId,
                    status: data.status,
                },
            });
            return updated;
        }
        catch (error) {
            console.error(error);
            return "Error updating order";
        }
    }
    // CORRECTION ICI : Le type de retour doit être Promise<string>
    async deleteOrder(id) {
        try {
            await prisma.orders.delete({ where: { id } });
            return "Order deleted successfully";
        }
        catch (error) {
            console.error(error);
            return "Error deleting order";
        }
    }
    async getOrdersByBuyerId(buyerId) {
        try {
            const orders = await prisma.orders.findMany({
                where: { buyerId },
                orderBy: { createdAt: "desc" },
            });
            return orders;
        }
        catch (error) {
            console.error(error);
            return "Error fetching orders by buyer";
        }
    }
    async getOrdersBySellerId(sellerId) {
        try {
            const orders = await prisma.orders.findMany({
                where: { sellerId },
                orderBy: { createdAt: "desc" },
            });
            return orders;
        }
        catch (error) {
            console.error(error);
            return "Error fetching orders by seller";
        }
    }
}
