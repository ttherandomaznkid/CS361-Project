// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to the Atlas cluster or local MongoDB.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected 
// and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({error: 'Error 500: cannot connect to the server.'});
    } else  {

    console.log("Successfully connected to MongoDB using Mongoose!");
    }
});


// Define the collection's schema.
const travelSchema = mongoose.Schema({
	destination: { type: String, required: true },
	year: { type: Number, required: true},
	status: { type: String, required: true },
    review: { type: String, required: false },
});

// Compile the model from the schema.
const Travel_dest = mongoose.model('Travel', travelSchema);


// CREATE model *****************************************
const createDest = async (destination, year, status, review) => {
    const dest = new Travel_dest({ 
        destination: destination, 
        year: year, 
        status: status,
        review: review
    });
    return dest.save();
}


// RETRIEVE models *****************************************

// Retrieve based on a filter and return a promise.
const findDest = async (filter) => {
    const query = Travel_dest.find(filter);
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const findById = async (id) => {
    const query = Travel_dest.findById(id);
    return query.exec();
}

const deleteById = async (_id) => {
    const result = await Travel_dest.deleteOne({_id: _id});
    return result.deletedCount;
};

const replaceDest = async (_id, destination, year, status, review) => {
    const result = await Exercise.replaceOne({ _id: id }, {
        destination: destination, 
        year: year, 
        status: status,
        review: review
    });
    return {
        id: id,
        destination: destination, 
        year: year, 
        status: status,
        review: review
    }
}

// DELETE models  *****************************************
// Delete based on the ID.


// // Delete based on filter.
// const deleteByProperty = async (filter) => {
//     const result = await Travel_dest.deleteMany(filter);
//     return result.deletedCount;
// }


// // UPyear model *****************************************
// const upyearDest = async (filter, upyear) => {
//     const result = await Travel_dest.upyearOne(filter, upyear);
//     return result.modifiedCount;
// };



// Export our variables for use in the controller file.
export { createDest, findDest, findById, replaceDest, deleteById}