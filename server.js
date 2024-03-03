// server.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors");

const app = express();

app.use(cors());

// Define your API endpoints and corresponding target URLs
const apiProxy = createProxyMiddleware('/api', {
  target: 'https://www.lilbookz.co.uk',
  changeOrigin: true,
});

// Use the proxy middleware for your API routes
app.use('/api', apiProxy);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
