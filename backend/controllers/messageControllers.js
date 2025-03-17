//import Model
const Message = require ("../models/message");

//controllers


//To submit message through contact form
const submit_feedback = (req, res) => {
  let message = new Message(req, body);
  message
  .save()
  .then((result) => {
    res.json({msg: error.message });
  })
  .catch((error) => res.json({msg: error.message }));
};

//Exports
module.exports = { submit_feedback };
