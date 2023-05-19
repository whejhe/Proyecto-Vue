const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/userModel');
const authController = require('../authController');

describe('Auth Controller', () => {
    describe('register', () => {
        it('should create a new user', async () => {
        
            const req = {
                body: {
                    username: 'carlos',
                    email: 'carlos@gmail.com',
                    password: '1234',
                },
            };

            
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            
            const hash = bcrypt.hashSync(req.body.password, 10);

            
            const userDB = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            };

            
            jest.spyOn(bcrypt, 'hashSync').mockReturnValue(hash);

            
            jest.spyOn(User, 'create').mockResolvedValue(userDB);

            
            await authController.register(req, res);

            
            expect(User.create).toHaveBeenCalledTimes(1);
            expect(User.create).toHaveBeenCalledWith({
                username: req.body.username,
                email: req.body.email,
                password: hash,
            });

            
            expect(res.status).toHaveBeenCalledWith(200);

            
            expect(res.json).toHaveBeenCalledWith({
                message: 'El usuario se ha creado correctamente',
                userDB,
            });
        });
    });
});
