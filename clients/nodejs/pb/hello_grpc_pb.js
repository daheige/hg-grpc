// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var hello_pb = require('./hello_pb.js');

function serialize_App_Grpc_Hello_HelloReq(arg) {
    if (!(arg instanceof hello_pb.HelloReq)) {
        throw new Error('Expected argument of type App.Grpc.Hello.HelloReq');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_App_Grpc_Hello_HelloReq(buffer_arg) {
    return hello_pb.HelloReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_App_Grpc_Hello_HelloResponse(arg) {
    if (!(arg instanceof hello_pb.HelloResponse)) {
        throw new Error('Expected argument of type App.Grpc.Hello.HelloResponse');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_App_Grpc_Hello_HelloResponse(buffer_arg) {
    return hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// service 定义开放调用的服务
var InfoServiceService = exports.InfoServiceService = {
    sayHello: {
        path: '/App.Grpc.Hello.InfoService/SayHello',
        requestStream: false,
        responseStream: false,
        requestType: hello_pb.HelloReq,
        responseType: hello_pb.HelloResponse,
        requestSerialize: serialize_App_Grpc_Hello_HelloReq,
        requestDeserialize: deserialize_App_Grpc_Hello_HelloReq,
        responseSerialize: serialize_App_Grpc_Hello_HelloResponse,
        responseDeserialize: deserialize_App_Grpc_Hello_HelloResponse,
    },
};

exports.InfoServiceClient = grpc.makeGenericClientConstructor(InfoServiceService);