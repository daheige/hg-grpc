# php grpc参考
    https://my.oschina.net/u/2400083/blog/1819831

# 安装php grpc,protobuf
    sudo pecl install grpc
    sudo pecl install protobuf
    sudo service php-fpm restart

# 安装php_grpc工具
    cd /usr/local/
    git clone -b $(curl -L https://grpc.io/release) https://github.com/grpc/grpc

    cd grpc
    git pull --recurse-submodules && git submodule update --init --recursive
    make & sudo make install

# 安装php composer包
    composer require grpc/grpc --profile --prefer-dist --optimize-autoloader
    composer require google/protobuf --profile --prefer-dist --optimize-autoloader
