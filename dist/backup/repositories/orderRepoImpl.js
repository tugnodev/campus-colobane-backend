import { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo";
import { createOrderDto, updateOrderDto, orderDto } from "../../Application/dtos/order";
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
export class OrderRepoImpl {
    async saveOrder(order) {
        const newO = await prisma.order.create({ data: { order } });
        if (!newO)
            return "Error while creating order";
        return newO;
    }
    async updateOrder(order) {
        const exist = await prisma.order.findUnique({ where: { id: order.id } });
        if (!exist)
            return "Order with ID does not exist";
        const updatedOrder = await prisma.order.update({ where: { id: order.id }, data: order });
        if (!updatedOrder)
            return "Error while updating order";
        return updatedOrder;
    }
    async deleteOrder(id) {
        const exist = await prisma.order.findUnique({ where: { id } });
        if (!exist)
            return "Order with ID does not exist";
        await prisma.order.delete({ where: { id } });
        return "Order deleted with success";
    }
    async getOrdersByBuyerId(buyerId) {
        const orders = await prisma.order.findMany({ where: { buyerId: buyerId } });
        if (!orders || orders.length === 0)
            return "No orders found for this buyer";
        return orders;
    }
    async getOrdersBySellerId(sellerId) {
        const orders = await prisma.order.findMany({ where: { sellerId: sellerId } });
        if (!orders || orders.length === 0)
            return "No orders found for this seller";
        return orders;
    }
}
