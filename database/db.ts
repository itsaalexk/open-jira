const mongoose = require('mongoose');



const mongooseConnection = {

    isConnected:0
}

export const connectDB = async()=>{
    if (mongooseConnection.isConnected){
        console.log('Ya estabamos conectados con la base de datos');
        return;
    }
    if (mongoose.connections.length > 0){
        mongooseConnection.isConnected = mongoose.connections[0].readyState

        if(mongooseConnection.isConnected === 1 ){
            console.log('usando la conexion anterior')
            return;
        }
        await mongoose.disconnect()
    }
    await mongoose.connect(process.env.MONGO_URL);
    mongooseConnection.isConnected = 1;
    console.log('Conectado a la base de datos')

}

export const disconnectDB = async()=>{
    
    if (process.env.NODE_ENV === 'development') return

    if(mongooseConnection.isConnected === 0) return

    await mongoose.disconnect()
    console.log('Base de datos desconectada')


}