const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
// parse application/json
app.use(bodyParser.json())
// without arrow function 
// function callRoot(req, res) {
//     res.send('Thank you for calling')
// }

// Get 
app.get('/', (req, res) => {
    const products = {
        productName: 'Orange',
        productPrice: 130
    }
    res.send(products);
});
// API
app.get('/orange', (req, res) => {
    res.send({productName: 'Orange', productPrice: 10000, productQuantity: 1000})
});

// New API
const users = ['Sany', 'Shabrina', 'Mahabub', 'Muniya', 'Ammu', 'Abbu', 'Meher', 'Mahbaub']

app.get('/user/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    console.log(req.query.sort);
    const userName = users[id];
    res.send({id, userName});
})


// post
app.post('/adduser', (req, res) => {
    // console.log('Post Recived', req.body);
    const user = req.body;
    user.id = 55;
    res.send(user);
})


app.listen(3000, () => console.log('listening to port 3000'));