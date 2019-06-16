#php grpc运行
    composer install
    php hello_client.php
# 关于是否需要使用protobuf.so
    对于php7.0+，protoc3可以安装php protobuf拓展
    vim php.ini
    extension=protobuf.so
    extension=grpc.so

    这个时候，可以去掉composer2.json中的
    "google/protobuf": "^3.8"
    mv composer2.json composer.json
    然后composer update