const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Successfully to connect to DB!!!!')
    } catch (error) {
        console.log('Failue to connect to DB!!!!')
    }
}

module.exports = { connect };
