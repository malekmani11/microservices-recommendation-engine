const express = require('express');
const app = express();
const port = 4000;

app.get('/recommendations', (req, res) => {
  res.json([{ id: 1, item: 'Example Recommendation' }]);
});

app.listen(port, () => {
  console.log(`Recommendation Service running on port ${port}`);
});
