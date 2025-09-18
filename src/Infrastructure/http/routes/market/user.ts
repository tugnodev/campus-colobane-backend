import { Hono } from 'hono';
import { UserController } from '../../controllers/userController.js';
import { UserUseCase } from '../../../../Application/usecases/userUseCase.js';
import { UserRepoImpl } from '../../../repositories/userRepoImpl.js';
import { auth } from '../../../config/auth.js';

const userRepository = new UserRepoImpl();
export const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const userRoutes = new Hono();

userRoutes.get('/greeting', async (c) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });
    const name = session?.user?.name;
    return c.json({ message: `Hello ${name}`, id: session?.user?.id });
});

userRoutes.post('/register', async (c) => {
    return userController.createUser(c);
});

userRoutes.post('/login', async (c) => {
    return userController.userLogin(c);
});

userRoutes.get('/all', async (c) => {
    return userController.getAllUsers(c);
});

userRoutes.get('/:id', async (c) => {
    return userController.getUserById(c);
});

userRoutes.patch('/update', async (c) => {
    return userController.updateUser(c);
});
userRoutes.delete('/delete', async (c) => {
    return userController.deleteUser(c);
});

export { userRoutes };