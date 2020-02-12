const router = require('express').Router();

const LogEntry = require('../models/LogEntry');

router.get('/', async(req, res, next)=>{
  try{
    const entries = await LogEntry.find({});
    res.json(entries);
  }catch(error){
    if(error.name === 'ValidationError'){
      res.status(422);
    }
    next(error);
  }
})

router.post('/', async(req,res,next)=>{
  try{
    const logEntry = new LogEntry(req.body);
    const newEntry = await logEntry.save();
    res.json(newEntry);
  }catch(error){
    if(error.name === 'ValidationError'){
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;