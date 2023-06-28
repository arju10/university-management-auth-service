import { User } from "./users.model";
import { IUser } from "./users.interface";
import config from "../../../config/index";
import { generateUserId } from "./users.utils";



// Create New User => /api/v1/users/create-user (POST)
const createUser = async (user: IUser): Promise<IUser | null> => {

    // Auto Generated Increment ID
    const id = await generateUserId();
    user.id = id;

    // Default Password
    if (!user.password) {
        user.password = config.default_user_pass as string
    }

    const createdUser = await User.create(user);
    if (!createUser) {
        throw new Error("Failed to create user");
    }
    return createdUser;
}

export default { createUser };
