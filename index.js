const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่า EJS เป็น view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ตั้งค่า static directory สำหรับไฟล์ CSS และอื่นๆ
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('login');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});