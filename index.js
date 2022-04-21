const express = require('express');

const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())


// route or npm
app.get('/', (req, res) => {
    res.send('hello gffffffffff this is my second and again')
});
app.get('/users', (req, res) => {
    //filter by quarry
    if (req.query.name) {
        const result = req.query.name;
        const matched = users.filter(u => u.name.toLowerCase().includes(result))
        res.send(matched)
    }
    res.send(users)
});
//url parameter
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/hello', (req, res) => {
    res.send(users)

})

const users = [
    { id: 1, name: 'sabana', email: "sabana@gmail.com", phone: '01832555555' },
    { id: 2, name: 'sahana', email: "sahana@gmail.com", phone: '01833333353' },
    { id: 3, name: 'salma', email: "salma@gmail.com", phone: '01832333331' },
    { id: 4, name: 'sabnur', email: "sabnur@gmail.com", phone: '01832121212' },
    { id: 5, name: 'sultana', email: "sultana@gmail.com", phone: '01832303030' },
    { id: 6, name: 'satabdi', email: "satabdi@gmail.com", phone: '01832666666' },
]


// const posts =
//     [
//         {
//             id: 1,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//         },
//         {
//             id: 2,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//         },
//         {
//             id: 3,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//         },
//         {
//             id: 4,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//         },
//         {
//             id: 5,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//         },
//         {
//             id: 6,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//         },
//     ];
// app.get('/post/:postId', (req, res) => {
//     console.log(req.params);
//     const id = parseInt(req.params.postId)
//     const post = posts.find(p => p.id === id);
//     res.send(post)
// });

app.listen(port, () => {
    console.log('hello to port');
})