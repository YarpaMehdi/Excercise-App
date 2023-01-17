const express = require('express')
const noteRouter = express.Router();

noteRouter.get('/',(req,res) =>{
    res.send('Note Get')
});

noteRouter.post('/',(req,res) =>{
    res.send('Note Post')
})

module.exports = noteRouter;
