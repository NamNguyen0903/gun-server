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
    peers: ['https://dcc3-2402-800-63f2-d427-b979-b645-ad28-9b92.ngrok-free.app/gun', 'http://192.168.1.12:8080/gun']
});

server.listen(8081, () => {
    console.log('Server listening on http://localhost:8081');
});
