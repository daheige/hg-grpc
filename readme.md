# golang-grpc
    grpc学习
# 生成golang grpc代码
    sh bin/pb-generate.sh
# 开始运行
    $ go run server.go 
    2019/06/15 18:12:20 hg-grpc run on: 50051
    
    客户端运行,新开一个窗口
    $ go run app.go
    2019/06/15 18:12:23 code:200,message:success

    服务端输出
    2019/06/15 18:28:12 hg-grpc run on: 50051
    2019/06/15 18:28:16 recv req: name:"golang grpc" age:29 
    2019/06/15 18:28:16 golang grpc
    2019/06/15 18:28:16 recv data:  name:"heige" 
    2019/06/15 18:28:16 username:  heige
 
 # 线上部署
    两种方式：
    1.采用supervisor上线
    2.采用docker运行
