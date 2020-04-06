# ubuntu php grpc
    使用ubutun18.04操作系统

# php grpc参考
    https://my.oschina.net/u/2400083/blog/1819831

# 安装php grpc,protobuf拓展
    #安装zlib依赖
    sudo apt-get install zlib1g-dev

    #fedora or redhat：
    #yum install zlib-devel

    sudo pecl install grpc

    #如果php版本不支持protobuf可以用composer install安装，这里就不需要安装
    #对于php7.0+，protoc3可以安装php protobuf拓展
    sudo pecl install protobuf
    
    sudo service php-fpm restart
    另外一种安装方式phpize方式，地址：http://pecl.php.net/package-search.php?pkg_name=grpc
    http://pecl.php.net/package-search.php?pkg_name=protobuf

# 安装php_grpc工具
    cd /usr/local/
    sudo mkdir /usr/local/grpc
    sudo chown -R $USER /usr/local/grpc
    git clone -b $(curl -L https://grpc.io/release) https://github.com/grpc/grpc

    cd /usr/local/grpc
    git pull --recurse-submodules && git submodule update --init --recursive
    make & sudo make install
    make grpc_php_plugin
    
    #建立php grpc工具软链接
    sudo ln -s /usr/local/grpc/bins/opt/grpc_php_plugin /usr/bin/grpc_php_plugin
    sudo chmod +x /usr/bin/grpc_php_plugin

# 安装php composer包
    composer require grpc/grpc --profile --prefer-dist --optimize-autoloader

    如果使用了php protobuf拓展，下面的composer包不需要安装
    composer require google/protobuf --profile --prefer-dist --optimize-autoloader
