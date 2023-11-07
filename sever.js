const express = require('express');
const app = express();

// Serve the service worker with the correct MIME type
app.get('/service-worker.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'path-to-your-service-worker.js'));
});

// Other routes and middleware
const port = process.env.PORT || 3001;
// Start the server
app.listen(port, () => {
  console.log('Server is running on port 3000');
});
