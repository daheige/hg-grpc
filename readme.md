# golang-grpc
    1、grpc微服务设计，包含go,php,nodejs代码自动生成，可用于大型项目微服务架构设计。
    2、包含nodejs,php,go三种不同客户端调用go grpc微服务模块
    3、负载均衡处理，采用nginx grpc反向代理

# go-grpc实战指南
    https://github.com/daheige/go-grpc-practice-guide

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
# 安装php grpc工具
    参考docs/php_grpc.md文件

# 生成golang grpc代码
    sh bin/pb-generate.sh
# 开始运行
    $ go run server.go 
    2019/06/15 18:12:20 hg-grpc run on: 50051
    
    客户端运行,新开一个窗口
    $ go run clients/go/app.go 
    2019/06/15 23:16:23 code:200,message:success
    2019/06/15 23:16:23 res2:  id:1 name:"heige" age:29  err:  <nil>
    2019/06/15 23:16:23 res3:  name:"hello,daheige" message:"call success"  error:  <nil>

    服务端输出
    $ go run server.go 
    2019/06/15 23:16:09 hg-grpc run on: 50051
    2019/06/15 23:16:23 recv req:  name:"golang grpc" age:29 
    2019/06/15 23:16:23 golang grpc
    2019/06/15 23:16:23 recv data:  name:"heige" 
    2019/06/15 23:16:23 username:  heige
    2019/06/15 23:16:23 recv req:  name:"daheige" 
    2019/06/15 23:16:23 daheige

    php客户端运行
    $ php hello_client.php heige
    检测App\Grpc\GPBMetadata\Hello\HelloReq是否存在
    bool(true)
    status code: 0
    call success
    getUser
    status code: 0
    id: 11name: heigeobject(Google\Protobuf\Internal\RepeatedField)#19 (0) {
    }
    int(4)
    title 第一个元素: userInfo

    nodejs客户端运行
    cd clients/nodejs
    node hello_client.js heige
    call success
    hello,heige

# 配置nginx grpc负载均衡
    为了go grpc服务高可用，需要对grpc服务做负载均衡处理，这里借助nginx grpc模块实现

    #nginx gprc负载均衡配置，要求nginx1.13.0+以上版本
    #nginx gprc负载均衡配置
    upstream go_grpc {
        server 127.0.0.1:50051 weight=5 max_fails=3 fail_timeout=10;
        server 127.0.0.1:50052 weight=1 max_fails=3 fail_timeout=10;
    }

    server {
        listen 50050 http2;
        server_name localhost;

        access_log /web/wwwlogs/go-grpc-access.log;

        location / {
            grpc_pass grpc://go_grpc;
        }
    }

    重启nginx服务
    sudo service nginx restart

    测试nginx grpc负载均衡
    cd clients/php
    $ php hello_client2.php  heige
    检测App\Grpc\GPBMetadata\Hello\HelloReq是否存在
    bool(true)
    status code: 0
    call success
    getUser
    status code: 0
    id: 11name: heigeobject(Google\Protobuf\Internal\RepeatedField)#19 (0) {
    }
    int(4)
    title 第一个元素: userInfo

    测试go client
    $ go run clients/go/app_client_grpc.go heige
    2019/06/16 17:24:35 code:200,message:success
    2019/06/16 17:24:35 res2:  id:11 name:"heige" age:23 title:"userInfo" title:"golang" title:"grpc" title:"php-grpc"  err:  <nil>
    2019/06/16 17:24:35 title:  [userInfo golang grpc php-grpc]
    2019/06/16 17:24:35 res3:  name:"hello,daheige" message:"call success"  error:  <nil>

 # 线上部署
    两种方式：
    1.采用supervisor上线
    2.采用docker运行
