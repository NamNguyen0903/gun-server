const express = require('express');
const Gun = require('gun');
const port = process.env.PORT || 8081;

const app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const gun = Gun({
    web: server,
    peers: ['https://6aad-2402-800-63f2-d427-b979-b645-ad28-9b92.ngrok-free.app', 'http://remote-address-2:8080/gun', 'http://remote-address-3:8080/gun'] // Cập nhật các địa chỉ thực tế
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
