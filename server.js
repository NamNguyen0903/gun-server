const Gun = require('gun');
const http = require('http');

const server = http.createServer((req, res) => {
    if (Gun.serve(req, res)) return; // Phục vụ các file của GunDB
    res.writeHead(200);
    res.end('GunDB Server is running!');
});

// Đảm bảo cập nhật địa chỉ IP và cổng cho các máy chủ khác trong mạng của bạn
const gun = Gun({
    web: server,
    peers: ['http://192.168.1.10:8080/gun', 'http://192.168.1.12:8080/gun']
});

server.listen(8081, () => {
    console.log('Server listening on http://localhost:8081');
});
