const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Docker is awesome");
})

const port = 3000;
app.listen(port , () => console.log(`server is running on port ${port}`))