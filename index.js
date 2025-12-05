// --- index.js ---
require('dotenv').config(); // Load variabel dari .env
const app = require('./src/app'); // Import konfigurasi app dari folder src

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});