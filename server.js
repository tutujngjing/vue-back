let http = require("http");

let users = [
    { id: 1, name: 'wangErMao' },
    { id: 2, name: 'wangDaMao' }
]

let server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end("not fond")
    }
})

server.listen(3000,()=> {
    console.log('后端服务已启动')
})