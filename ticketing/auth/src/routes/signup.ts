import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be min 4 and max 20 characters')
], (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.send('Hello world');
});

export { router as signUpRouter }