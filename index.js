const express = require('express');
const app = express();
// without arrow function 
// function callRoot(req, res) {
//     res.send('Thank you for calling')
// }

app.get('/', (req, res) => {
    res.send('Thank you for calling me node is now running');
})
app.listen(3000, () => console.log('listening to port 3000'));