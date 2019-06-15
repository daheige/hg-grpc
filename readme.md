# golang-grpc
    grpc学习
# install proto3
    安装方式1: source install
        下载网站: https://github.com/google/protobuf/releases 
        cd /usr/local/src
        sudo wget https://github.com/google/protobuf/releases/download/v3.5.1/protobuf-all-3.5.1.tar.gz
        sudo tar zxvf protobuf-all-3.5.1.tar.gz
        需要编译, 在新版的 PB 源码中，是不包含 .configure 文件的，需要生成，此时先执行 ./autogen.sh 
        脚本说明如下：
        # Run this script to generate the configure script and other files that will
        # be included in the distribution. These files are not checked in because they
        # are automatically generated.

        此时生成了 .configure 文件，可以开始编译了
        sudo ./configure --prefix=/usr/local/protobuf
        sudo make && make install

        安装完成后,查看版本:
        cd /usr/local/protobuf/bin
        ./protoc --version
            libprotoc 3.5.1
        
        建立软链接
            sudo ln -s /usr/local/protobuf/bin/protoc /usr/bin/protoc

    安装方式2: centos yum 安装
            ubuntu用apt安装(可能是proto2,升级到proto3,建议用源码方式安装)
                sudo apt install protobuf-c-compiler  protobuf-compiler
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
