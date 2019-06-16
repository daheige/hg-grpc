# nodejs grpc
    nodejs grpc client
# 安装nodejs
    cd /usr/local/
    sudo wget https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-x64.tar.xz
    sudo xz -d node-v10.16.0-linux-x64.tar.xz
    sudo tar xvf node-v10.16.0-linux-x64.tar.xz
    sudo mv node-v10.16.0-linux-x64 nodejs
    #为了方便当前用户，设置nodejs为当前用户所属，生产环境不建议这么做
    sudo chown -R $USER /usr/local/nodejs
    sudo ln -s /usr/local/nodejs/bin/npm /usr/bin/npm
    sudo chmod +x /usr/bin/npm
    vim ~/.bashrc 添加如下内容
    export NODEJS_HOME=/usr/local/nodejs
    export PATH=$NODEJS_HOME/bin:$PATH

    source ~/.bashrc #生效

# 安装cnpm和yarn
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install -g yarn

# 安装nodejs gprc模块
    cnpm install grpc-tools --save-dev
    cnpm install google-protobuf --save
    cnpm install grpc --save

# 开始运行
    $ node hello_client.js heige
    (node:14621) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    { wrappers_: null,
    messageId_: undefined,
    arrayIndexOffset_: -1,
    array: [ 'hello,heige', 'call success' ],
    pivot_: 1.7976931348623157e+308,
    convertedPrimitiveFields_: {} }
    call success
    hello,heige
