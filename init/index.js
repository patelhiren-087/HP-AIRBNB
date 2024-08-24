const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
 


const mongo_url = "mongodb://127.0.0.1:27017/wonderlust";


main().then( () => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
})


async function main() {
    await mongoose.connect(mongo_url);
}



const initDB = async () => {
    await Listing.deleteMany({});  
    initData.data = initData.data.map((obj) => ({...obj, owner : '66c77490f829f0c070a45268'}));
    await Listing.insertMany(initData.data);
    console.log('Database initialized with data');
}

initDB();