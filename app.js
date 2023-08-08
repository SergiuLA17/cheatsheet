const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/js', (req, res) => {
  const markdownFilePath = path.join(__dirname, 'public', 'js.md');

  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {

      res.status(500).send('Error reading the file.');
    } else {

      const htmlContent = marked(data);

      res.send(htmlContent);
    }
  });
});

app.get('/eng', (req, res) => {
  return res.send('eng section');
});

app.get('/kube', (req, res) => {
  const markdownFilePath = path.join(__dirname, 'public', 'kubernates.md');

  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {

      res.status(500).send('Error reading the file.');
    } else {

      const htmlContent = marked(data);


      res.send(htmlContent);
    }
  });
});
app.get('/training', (req, res) => {
  res.sendFile(__dirname + '/public/training.html'); 
});

app.get('/home', (req, res) => {
  const markdownFilePath = path.join(__dirname, 'public', 'index.md');

  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {

      res.status(500).send('Error reading the file.');
    } else {

      const htmlContent = marked(data);

      res.send(htmlContent);
    }
  });
});

app.get('/getTrainigHistory', (req, res) => {
  fs.readFile('public/results.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }

    const existingData = JSON.parse(data);

    res.send(existingData);
  });
});

app.get('/terminal', (req, res) => {
  const markdownFilePath = path.join(__dirname, 'public', 'terminal.md');

  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {

      res.status(500).send('Error reading the file.');
    } else {

      const htmlContent = marked(data);

      res.send(htmlContent);
    }
  });
});

app.get('/eng', (req, res) => {
  return res.send('eng section!');
});

app.post('/saveResults', (req, res) => {
  const results = req.body;


  fs.readFile('public/results.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }
    const existingData = JSON.parse(data);

    existingData.push(results);

    const jsonResults = JSON.stringify(existingData, null, 2);

    fs.writeFile('public/results.json', jsonResults, 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing to file');
        return;
      }

      console.log('Results saved');
      res.sendStatus(200);
    });
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
