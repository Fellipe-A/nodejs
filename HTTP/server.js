const http = require('http')

http.createServer((req, res) => {
    console.log(req)

    return
}).listen(5000, () => console.log('Server is running'))