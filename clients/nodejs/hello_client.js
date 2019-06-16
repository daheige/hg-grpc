let services = require('./pb/hello_grpc_pb.js')
let messages = require('./pb/hello_pb.js')
let grpc = require('grpc')

let request = new messages.HelloReq()
request.setName('heige')

let client = new services.InfoServiceClient(
    // 'localhost:50051',
    'localhost:50050', //nginx grpc负载均衡端口
    grpc.credentials.createInsecure()
)

client.sayHello(request, function(err, data) {
    if (err) {
        console.error(err)
    }

    console.log(data)
    console.log(data.getMessage())
    console.log(data.getName())
})