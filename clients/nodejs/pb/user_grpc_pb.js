// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_App_Grpc_User_SetUserReq(arg) {
  if (!(arg instanceof user_pb.SetUserReq)) {
    throw new Error('Expected argument of type App.Grpc.User.SetUserReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_App_Grpc_User_SetUserReq(buffer_arg) {
  return user_pb.SetUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_App_Grpc_User_SetUserResponse(arg) {
  if (!(arg instanceof user_pb.SetUserResponse)) {
    throw new Error('Expected argument of type App.Grpc.User.SetUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_App_Grpc_User_SetUserResponse(buffer_arg) {
  return user_pb.SetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_App_Grpc_User_UserReq(arg) {
  if (!(arg instanceof user_pb.UserReq)) {
    throw new Error('Expected argument of type App.Grpc.User.UserReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_App_Grpc_User_UserReq(buffer_arg) {
  return user_pb.UserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_App_Grpc_User_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type App.Grpc.User.UserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_App_Grpc_User_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// service 定义开放调用的服务，即 UserInfoService 微服务
var UserInfoServiceService = exports.UserInfoServiceService = {
  // rpc 定义服务内的 GetUserInfo 远程调用
  getUserInfo: {
    path: '/App.Grpc.User.UserInfoService/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserReq,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_App_Grpc_User_UserReq,
    requestDeserialize: deserialize_App_Grpc_User_UserReq,
    responseSerialize: serialize_App_Grpc_User_UserResponse,
    responseDeserialize: deserialize_App_Grpc_User_UserResponse,
  },
  setUser: {
    path: '/App.Grpc.User.UserInfoService/SetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SetUserReq,
    responseType: user_pb.SetUserResponse,
    requestSerialize: serialize_App_Grpc_User_SetUserReq,
    requestDeserialize: deserialize_App_Grpc_User_SetUserReq,
    responseSerialize: serialize_App_Grpc_User_SetUserResponse,
    responseDeserialize: deserialize_App_Grpc_User_SetUserResponse,
  },
};

exports.UserInfoServiceClient = grpc.makeGenericClientConstructor(UserInfoServiceService);
