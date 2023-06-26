import { User } from "./users.model";
import { IUser } from "./users.interface";
import config from "../../config/index";
import { generateUserId } from "./users.utils";


const createUser = async (user: IUser): Promise<IUser | null> => {
    const createdUser = await User.create(user);

    // Auto Generated Increment ID
    const id = await generateUserId();

    user.id = id;

    // Default Password
    if(!user.password){
        user.password = config.default_user_pass as string
    }

    if(!createUser){
        throw new Error("Failed to create user");
    }
    return createdUser;
}

export default {
    createUser
}