const express = require('express');
const { createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// Proxy all incoming requests to the target site
app.use('/', createProxyMiddleware({
  target: 'https://www.google.com', // Replace with your desired target
  changeOrigin: true,
  ws: true,
  secure: true,
  logLevel: 'silent'
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Stealth proxy running on port ${PORT}`);
});

