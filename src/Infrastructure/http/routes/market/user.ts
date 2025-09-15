import { Hono } from 'hono';
import { UserController } from '../../controllers/userController.js';
import { UserUseCase } from '../../../../Application/usecases/userUseCase.js';
import { UserRepoImpl } from '../../../repositories/userRepoImpl.js';

const userRepository = new UserRepoImpl();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const userRoutes = new Hono();

userRoutes.get('/', async (c) => {
    return c.json({ message: 'Hello User!' });
});

userRoutes.post('/register', async (c) => {
    return userController.createUser(c);
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
userRoutes.get('/all', async (c) => {
    return userController.getAllUsers(c);
});

export { userRoutes };