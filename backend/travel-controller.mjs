import 'dotenv/config';
import express from 'express';
import * as destination from './travel-model.mjs';


const PORT = process.env.PORT;
const app = express();
app.use(express.json());



// exploration-using-mongoose-to-implement-crud-operations
// create
app.post('/log', (req, res) => {
    destination.createDest(
        req.body.destination,
        req.body.year,
        req.body.status,
        req.body.review,
    )

    .then(dest => {
        res.status(201).json(dest);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Destination document failed to be created.'});
    });

});

// retrieve
app.get('/log', (req, res) => {
    destination.findDest()
    .then(dest => {
        if (dest !== null) {
            res.json(dest);
        } else {
            res.status(404).json({ error: 'Destination document couldnt be retrieved.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Retrieving destination document request failed.'});
    });
});

//upyear
app.put('/log/:id', (req, res) => {
    destination.replaceDest(
        req.params.id,
        req.body.destination,
        req.body.year,
        req.body.status,
        req.body.review,
    )
    .then(dest => {
        res.json(dest);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Updating destination document request failed.'});
    });
});

//delete
app.delete('/log/:id', (req, res) => {
    destination.deleteById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'No document available'});
            }
        })
        .catch(error => {
            console.log(error);
            res.send({ error: 'Deleting documement request failed.'});
        });
    });


// // CREATE controller ******************************************
// app.get('/create', asyncHandler(async (req,res) => { 
//     const user = await destination.createDest(
//         req.body.destination,
//         req.body.year,
//         req.body.status,
//         req.body.review,
//         )
//     res.send(user);
// }));

// // FILTER through the object using If Else syntax  ****************** 
// // 1 PARM ONLY --- does not work when asking for multiple params
// function usersFilter(req) {
//     let filter = {};
//     if (req.body._id !== undefined) {
//         filter._id = req.body._id;
//     } if (req.body.name !== undefined) {
//          filter.name = req.body.name;
//     } if (req.body.age !== undefined) {
//          filter.age = req.body.age;
//     } if (req.body.email !== undefined) {
//         filter.email = req.body.email;
//     } if (req.body.phoneNumber !== undefined) {
//         filter.phoneNumber = req.body.phoneNumber;
//     } 
//     return filter;
// }



// // RETRIEVE ****************************************************
// // ALL or filtered set of documents controller   
// app.get ('/retrieve', asyncHandler(async (req,res) => { 
//     const filter = usersFilter(req);
//     const result = await users.findUsers(filter)
//     res.send(result);
// }));



// // DELETE Functions and Controller ******************************

// // Delete by ID with error catching
// function deleteById(req, res) {
//     users.deleteById(req.body._id)
//         .then(deletedCount => {
//             res.send({ deletedCount: deletedCount });
//         })
//         .catch(error => {
//             console.error(error);
//             res.send({ error: 'Request failed' });
//         });
// }

// // Delete based on the filter
// function deleteByProperty(req, res) {
//     const filters = usersFilter(req);
//     users.deleteByProperty(filters)
//         .then(deletedCount => {
//             res.send({ deletedCount: deletedCount });
//         })
//         .catch(error => {
//             console.error(error);
//             res.send({ error: 'Request failed' });
//         });
// }

// // DELETE document by ID or by Property controller
// app.get('/delete', (req, res) => {
//     if (req.body._id !== undefined) {
//         deleteById(req, res);
//     } else {
//         deleteByProperty(req, res);
//     }
// });



// // UPyear documents controller ************************************
// app.get('/upyear', (req, res) => {
//     // Find the users via the _id and if found, filter, 
//     // make the upyear, and print the number of upyeard documents.
//     users.findById(req.body._id)
//         .then(user => {
//             if (user !== null) {
//                 const upyear = {};
//                 if (req.body.name !== undefined) {
//                     upyear.name = req.body.name;
//                 }
//                 if (req.body.age !== undefined) {
//                     upyear.age = req.body.age;
//                 }
//                 if (req.body.email !== undefined) {
//                     upyear.email = req.body.email;
//                 }
//                 if (req.body.phoneNumber !== undefined) {
//                     upyear.phoneNumber = req.body.phoneNumber;
//                 }
//                 users.upyearUsers({ _id: req.body._id }, upyear)
//                     .then(upyearCount => {
//                         res.send({ upyearCount: upyearCount });
//                     })
//                     .catch(error => {
//                         console.error(error);
//                         res.send({ Error: 'The document was not upyeard.'});
//                     });
//             } else {
//                 res.send({ Error: 'Not found' });
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             res.json({ Error: error });
//         });

// });


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});