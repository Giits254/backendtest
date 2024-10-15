const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
// Replace 'YOUR_FRONTEND_URL' with your actual frontend URL after deployment
app.use(cors({
  origin: 'https://frontendtest-gze3.onrender.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
