import { PrismaClient } from '@prisma/client';
import { OUserRepo } from "../../Domaine/ports/outputs/userRepo";
import { createUserDto, updateUserDto, userDto } from "../../Application/dtos/user";
const prisma = new PrismaClient();
export class UserRepoImpl {
    async saveUser(user) {
        const created = await prisma.user.create({ data: user });
        if (!created)
            return null;
        return { id: created.id, name: created.name, email: created.email, vendeur: created.vendeur };
    }
    async updateUser(user) {
        //check user existence
        const fetchedUser = await prisma.user.findUnique({ where: { id: user.id } });
        if (!fetchedUser) {
            return null;
        }
        const updated = await prisma.user.update({ where: { id: user.id }, data: user });
        return updated;
    }
    async getUserByEmail(email) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return null;
        }
        return user;
    }
    async deleteUser(id) {
        //verify existencies
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user)
            return;
        //delete user
        await prisma.user.delete({ where: { id } });
        return "User Deleted";
    }
    async getUserById(id) {
        const user = await prisma.user.findUnique({ where: { id } });
        return user;
    }
    async getAllUsers() {
        const users = await prisma.user.findMany();
        return users;
    }
}
