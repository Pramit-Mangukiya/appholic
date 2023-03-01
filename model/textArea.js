const mongoose = require('mongoose');

const textAreaSchema = new mongoose.Schema({
    myTextArea: {
    type: String,
  }
});

const TextArea = mongoose.model('TextArea', textAreaSchema);

module.exports = TextArea;
