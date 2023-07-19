import * as dotenv from 'dotenv';
import Configuration from "../interfaces/config.interface";
dotenv.config()

const ENV = process.env.NODE_ENV || 'development'

const CONFIG: Configuration = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        },

    },

}

export default CONFIG[ENV]
