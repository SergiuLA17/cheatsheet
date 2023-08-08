const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// Define a route to handle the .md file
app.get('/js', (req, res) => {
  const markdownFilePath = path.join(__dirname, 'public', 'js.md');

  // Read the .md file
  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
      // Handle errors, e.g., file not found
      res.status(500).send('Error reading the file.');
    } else {
      // Convert Markdown to HTML
      const htmlContent = marked(data);

      // Send the HTML content
      res.send(htmlContent);
    }
  });
});

app.get('/eng', (req, res) => {
  return res.send('eng section!');
});

app.get('/kube', (req, res) => {
  const markdownFilePath = path.join(
    __dirname,
    'public',
    'kubernates.md'
  );

  // Read the .md file
  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
      // Handle errors, e.g., file not found
      res.status(500).send('Error reading the file.');
    } else {
      // Convert Markdown to HTML
      const htmlContent = marked(data);

      // Send the HTML content
      res.send(htmlContent);
    }
  });
});
app.get('/training', (req, res) => {
  res.sendFile(__dirname + '/public/training.html'); // Change the path as needed
});

app.get('/home', (req, res) => {
  const markdownFilePath = path.join(__dirname, 'public', 'index.md');

  // Read the .md file
  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
      // Handle errors, e.g., file not found
      res.status(500).send('Error reading the file.');
    } else {
      // Convert Markdown to HTML
      const htmlContent = marked(data);

      // Send the HTML content
      res.send(htmlContent);
    }
  });
});

app.get('/getTrainigHistory', (req, res) => {
  fs.readFile('results.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }

    // Разбираем данные в JSON
    const existingData = JSON.parse(data);

    res.send(existingData);
  });
});

app.get('/terminal', (req, res) => {
  const markdownFilePath = path.join(
    __dirname,
    'public',
    'terminal.md'
  );

  // Read the .md file
  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
      // Handle errors, e.g., file not found
      res.status(500).send('Error reading the file.');
    } else {
      // Convert Markdown to HTML
      const htmlContent = marked(data);

      // Send the HTML content
      res.send(htmlContent);
    }
  });
});

app.get('/eng', (req, res) => {
  return res.send('eng section!');
});

app.post('/saveResults', (req, res) => {
  const results = req.body;

  // Прочитать существующий файл
  fs.readFile('fatures/results.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }

    // Разбираем данные в JSON
    const existingData = JSON.parse(data);

    // Добавляем новые результаты в массив
    existingData.push(results);

    // Преобразовываем обратно в JSON
    const jsonResults = JSON.stringify(existingData, null, 2);

    // Записываем обновленные данные обратно в файл
    fs.writeFile('fatures/results.json', jsonResults, 'utf8', (err) => {
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
