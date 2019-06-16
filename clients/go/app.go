package main

import (
	"log"
	"os"

	pb "hg-grpc/pb"

	"context"

	"google.golang.org/grpc"
)

const (
	address     = "localhost:50051"
	defaultName = "golang grpc"
)

func main() {
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	c := pb.NewUserInfoServiceClient(conn)

	// Contact the server and print out its response.
	name := defaultName
	if len(os.Args) > 1 {
		name = os.Args[1]
	}

	res, err := c.SetUser(context.Background(), &pb.SetUserReq{
		Name: name,
		Age:  29,
	})

	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}

	log.Printf("code:%d,message:%s", res.Code, res.Message)

	res2, err := c.GetUserInfo(context.Background(), &pb.UserReq{
		Name: "heige",
	})

	log.Println("res2: ", res2, "err: ", err)
	log.Println("title: ", res2.GetTitle())

	c2 := pb.NewInfoServiceClient(conn)
	res3, err := c2.SayHello(context.Background(), &pb.HelloReq{
		Name: "daheige",
	})

	log.Println("res3: ", res3, "error: ", err)
}
