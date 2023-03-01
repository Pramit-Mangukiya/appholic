const TextArea = require('../model/textArea');

app.post('/appads', (req, res) => {
  const textArea = new TextArea({
    text: req.body.text
  });

  textArea.save((err) => {
    if (err) {
      console.log(err);
      res.redirect('/error');
    } else {
      res.redirect('/success');
    }
  });
});