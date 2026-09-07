import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import { auth } from "../config/auth.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { BetterAuthError } from "better-auth";
const prisma = new PrismaClient();
export class UserRepoImpl {
    async createUser(data) {
        try {
            const newUser = await auth.api.signUpEmail({
                //@ts-ignore
                body: {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    image: data.image,
                    rememberMe: data.rememberMe,
                },
            });
            const user = await prisma.user.update({
                where: { id: newUser.user.id },
                data: {
                    vendeur: false,
                    address: data.address,
                    certified: false,
                },
            });
            newUser.user = user;
            const cart = await prisma.carts
                .create({
                data: {
                    userId: user.id,
                    cart: [],
                },
            })
                .catch((error) => {
                return `Erreur lors de la création du panier: ${JSON.stringify(error)}"`;
            });
            console.log(cart);
            return newUser;
        }
        catch (e) {
            switch (e) {
                case e instanceof PrismaClientKnownRequestError:
                    return "Unvalid data";
                case e instanceof BetterAuthError:
                    return "User already exists";
                default:
                    return "unknown Error";
            }
        }
    }
    async updateUser(data) {
        try {
            const updatedUser = await prisma.user.update({
                where: { id: data.id },
                data,
            });
            return updatedUser;
        }
        catch (e) {
            switch (e) {
                case e instanceof PrismaClientKnownRequestError:
                    return "Unvalid data";
                case e instanceof Error:
                    return "Error updating user";
                default:
                    return "Error updating user";
            }
        }
    }
    async deleteUser(id) {
        try {
            await prisma.user.delete({
                where: { id },
            });
            return "User deleted";
        }
        catch (e) {
            switch (e) {
                case e instanceof PrismaClientKnownRequestError:
                    return "Unvalid data";
                case e instanceof Error:
                    return "Error deleting user";
                default:
                    return "Error deleting user";
            }
        }
    }
    async getUserById(id) {
        try {
            const user = await prisma.user.findUnique({
                where: { id },
            });
            if (!user) {
                return "User not found";
            }
            return user;
        }
        catch (e) {
            switch (e) {
                case e instanceof PrismaClientKnownRequestError:
                    return "Unvalid data";
                case e instanceof Error:
                    return "Error getting user";
                default:
                    return "Error getting user";
            }
        }
    }
    async turnToVendor(user) {
        try {
            const phoneNumber = await prisma.numbers
                .create({
                data: {
                    sellerId: user.id,
                    number: user.phone,
                },
            })
                .catch(() => {
                return "error whilw saving number";
            });
            const updatedUser = await prisma.user.update({
                where: { id: user.id },
                data: { vendeur: true, address: user.address },
            });
            return updatedUser;
        }
        catch (e) {
            switch (e) {
                case e instanceof PrismaClientKnownRequestError:
                    return "Unvalid data";
                case e instanceof Error:
                    return "Error turning user to vendor";
                default:
                    return "Error turning user to vendor";
            }
        }
    }
    async userLogout({ headers, }) {
        try {
            const logout = await auth.api.signOut({ headers });
            if (logout) {
                return { success: true };
            }
            else {
                return { success: false };
            }
        }
        catch (e) {
            return { success: false };
        }
    }
    async getStats(id) {
        try {
            let articles = await prisma.articles.findMany({
                where: { userId: id },
            });
            let commandes = await prisma.orders.findMany({
                where: { sellerId: id },
            });
            return {
                articles: {
                    total: articles.length,
                    rupture: articles.filter((article) => article.stock === 0).length,
                },
                commandes: {
                    total: commandes.length,
                    attente: commandes.filter((commande) => commande.status === "attente")
                        .length,
                    acceptees: commandes.filter((commande) => commande.status === "acceptee").length,
                    annulees: commandes.filter((commande) => commande.status === "annulee").length,
                },
            };
        }
        catch (e) {
            return "Error getting stats";
        }
    }
    async getAllUsers() {
        try {
            const users = await prisma.user.findMany();
            return users;
        }
        catch (e) {
            switch (e) {
                case e instanceof PrismaClientKnownRequestError:
                    return "Unvalid data";
                case e instanceof Error:
                    return "Error getting users";
                default:
                    return "Error getting users";
            }
        }
    }
}
