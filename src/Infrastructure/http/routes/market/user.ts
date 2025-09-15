import { Hono } from 'hono';
import { UserController } from '../../controllers/userController.js';
import { UserUseCase } from '../../../../Application/usecases/userUseCase.js';
import { UserRepoImpl } from '../../../repositories/userRepoImpl.js';

// Initialize dependencies
const userRepository = new UserRepoImpl();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const userRoutes = new Hono();

userRoutes.get('/', async (c) => {
    return c.json({ message: 'Hello User!' });
});

// Create a new user
userRoutes.post('/register', async (c) => {
    return userController.createUser(c);
});

// Get user by ID
userRoutes.get('/:id', async (c) => {
    return userController.getUserById(c);
});

// Update user
userRoutes.patch('/update', async (c) => {
    return userController.updateUser(c);
});

// Delete user
userRoutes.delete('/delete', async (c) => {
    return userController.deleteUser(c);
});

// Get all users (admin only)
userRoutes.get('/all', async (c) => {
    return userController.getAllUsers(c);
});

export { userRoutes };