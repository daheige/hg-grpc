package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc/reflection"

	"hg-grpc/pb"

	"context"

	"google.golang.org/grpc"
)

// server is used to implement UserInfoServiceServer.
type server struct{}

func (s *server) GetUserInfo(ctx context.Context, in *pb.UserReq) (*pb.UserResponse, error) {
	log.Println("recv data: ", in)
	log.Println("username: ", in.Name)
	if in.Name == "heige" {
		return &pb.UserResponse{
			Id:   1,
			Name: "heige",
			Age:  29,
		}, nil
	}

	return &pb.UserResponse{
		Id:   2,
		Name: "hg-grpc",
		Age:  39,
	}, nil
}

func (s *server) SayHello(ctx context.Context, in *pb.UserReq) (*pb.UserResponse, error) {
	return &pb.UserResponse{
		Id:   1,
		Name: "hello",
		Age:  29,
		Title: []string{
			"php", "go",
		},
	}, nil
}

func (s *server) SetUser(ctx context.Context, in *pb.SetUserReq) (*pb.SetUserResponse, error) {
	log.Println("recv req: ", in)
	log.Println(in.Name)
	return &pb.SetUserResponse{
		Code:    200,
		Message: "success",
	}, nil
}

type HelloServer struct{}

func (s *HelloServer) SayHello(ctx context.Context, in *pb.HelloReq) (*pb.HelloResponse, error) {
	log.Println("recv req: ", in)
	log.Println(in.Name)
	return &pb.HelloResponse{
		Name:    "hello," + in.Name,
		Message: "call success",
	}, nil
}

var port int

func init() {
	flag.IntVar(&port, "port", 50051, "grpc port")
	flag.Parse()
}

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterUserInfoServiceServer(s, &server{})
	pb.RegisterInfoServiceServer(s, &HelloServer{})
	// Register reflection service on gRPC server.
	// https://github.com/grpc/grpc-go/blob/master/Documentation/server-reflection-tutorial.md
	reflection.Register(s)

	log.Println("hg-grpc run on:", port)
	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
