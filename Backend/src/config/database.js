
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI.trim(), {
            dbName: 'interview-master'
        });

        console.log('Connected to Database');
        console.log('Database:', mongoose.connection.db.databaseName);

    } catch (err) {
        console.error('Error connecting to Database:', err.message);
        throw err;
    }
}

module.exports = connectDB;
