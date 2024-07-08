const express = require('express');
const routerMhs = require('./routes/mahasiswa')
const routerMk = require('./routes/matakuliah')
const routerNilai = require('./routes/nilai')
const app = express();
const port = 2500;

app.use(express.json());
app.use(routerMhs)
app.use(routerMk)
app.use(routerNilai)




app.listen(port, () => {
    console.log(`server berjalan dengan localhost:${[port]}`)
});