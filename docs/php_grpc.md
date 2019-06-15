# php grpc参考
    https://my.oschina.net/u/2400083/blog/1819831

# 安装php grpc,protobuf拓展
    sudo pecl install grpc
    sudo pecl install protobuf
    sudo service php-fpm restart
    另外一种安装方式phpize方式，地址：http://pecl.php.net/package-search.php?pkg_name=grpc
    http://pecl.php.net/package-search.php?pkg_name=protobuf

# 安装php_grpc工具
    cd /usr/local/
    sudo mkdir /usr/local/grpc
    sudo chown -R $USER /usr/local/grpc
    git clone -b $(curl -L https://grpc.io/release) https://github.com/grpc/grpc

    cd cd /usr/local/grpc
    git pull --recurse-submodules && git submodule update --init --recursive
    make & sudo make install
    make grpc_php_plugin

# 安装php composer包
    composer require grpc/grpc --profile --prefer-dist --optimize-autoloader
    composer require google/protobuf --profile --prefer-dist --optimize-autoloader
