import { Request, Response } from 'express';
import usersService from './users.service';

// Create New User => /api/v1/users/create-user (POST)
const createUser = async (req: Request, res: Response) => {
    try {
        const { user } = req.body;
        const result = await usersService.createUser(user);
        res.status(200).json({
            success: true,
            message: "User is created successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create User."
        })
    }
}

export default { createUser };