import { PrismaClient } from '@prisma/client';
import { OUserRepo } from "../../Domaine/ports/outputs/userRepo";
import { createUserDto, updateUserDto, userDto } from "../../Application/dtos/user";

const prisma = new PrismaClient();

export class UserRepoImpl implements OUserRepo {

    async saveUser(user: createUserDto): Promise<userDto | null> {
        const created = await prisma.user.create({ data: user });
        if (!created) return null;
        return { id: created.id, name: created.name, email: created.email, vendeur: created.vendeur };
    }

    async updateUser(user: updateUserDto): Promise<userDto | null> {
        //check user existence
        const fetchedUser = await prisma.user.findUnique({ where: { id: user.id } });
        if (!fetchedUser) {
            return null;
        }
        const updated = await prisma.user.update({ where: { id: user.id }, data: user });
        return updated as userDto;
    }

    async getUserByEmail(email: string): Promise<userDto | null> {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return null;
        }
        return user as userDto;
    }

    async deleteUser(id: string): Promise<void | string> {
        //verify existencies
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) return 
        //delete user
        await prisma.user.delete({where: {id}})
        return "User Deleted"
    }

    async getUserById(id: string): Promise<userDto | null> {
        const user = await prisma.user.findUnique({where: {id}})
        return user as userDto;
    }

    async getAllUsers(): Promise<userDto[]> {
        const users = await prisma.user.findMany()
        return users as userDto[];
    }
}