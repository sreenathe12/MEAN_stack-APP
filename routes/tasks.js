var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://sreenath:sreenath@ds139278.mlab.com:39278/contactme',['messages']);

router.get('/messages',function(req,res,next){
       db.messages.find(function(err,messages){
      if(err){
          res.send(err);
      }
      res.json(messages)
       });
});

router.post('/message',function(req,res,next){
  var message = req.body;
  if(!message.name || (!message.message)){
    res.status(404);
res.json({
    "error" : "bad data"
    })
  } else {
    db.messages.save(message, function(err,message){
           if(err){
        res.send(err);
    }
    res.json(message)
    });
  }
});

router.put('/message/:id',function(req,res,next){
     var message = req.body;
     var updtask= {};
if(message.name){
    updtask.name = message.name;
}
if(task.message){
    updtask.message = message.message;
}
if(!updtask){
     res.status(400);
      res.json({
          "error" : "bad data"
      });
} else {
        db.messages.update({_id:mongojs.ObjectId(req.params.id)},updtask,{},function(err,message){
      if(err){
          res.send(err);
      }
      res.json(message)
       });
}
});

module.exports = router;
