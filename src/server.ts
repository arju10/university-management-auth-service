import mongoose from 'mongoose';
import config from '../config/index';
import app from "./app";

async function boostrap() {

    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database is connected successfully`);

        // Server is running
        app.listen(config.port, () => {
            console.log(`Server is running on port http://localhost:${config.port}`)
          })
    } catch (error) {
        console.log("Failed to connect Database", error);
    }
}

boostrap();