const express = require('express');
const app = express();
// without arrow function 
// function callRoot(req, res) {
//     res.send('Thank you for calling')
// }

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
    const dynamic = users[id];
    res.send({id, dynamic});
})



app.listen(3000, () => console.log('listening to port 3000'));