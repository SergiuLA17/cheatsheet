const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

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
  const markdownFilePath = path.join(__dirname, 'public', 'kubernates.md');

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


app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
