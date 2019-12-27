console.log(process.env.NODE_ENV )
module.exports = {
    PORT:process.env.PORT?process.env.PORT:3000,
    mongodb: {
        uri: (process.env.NODE_ENV == 'testing')? 'mongodb://localhost:27017/db': 'mongodb://mongo:27017/db', // Databse URI and database name
        //secret: crypto, // Cryto-created secret
        db: process.env.DB_NAME || 'events', // Database name
        option: {
            useNewUrlParser: true,
            useCreateIndex: true,
            //useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        }
    }

};