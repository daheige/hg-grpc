<?php
require dirname(__FILE__) . '/vendor/autoload.php';

function greet($name)
{
    $client = new App\Grpc\Hello\InfoServiceClient('localhost:50051', [
        'credentials' => Grpc\ChannelCredentials::createInsecure(),
    ]);

    echo "检测App\Grpc\GPBMetadata\Hello\HelloReq是否存在".PHP_EOL;
    var_dump(class_exists("App\Grpc\Hello\HelloReq"));
    $request = new App\Grpc\Hello\HelloReq();
    $request->setName($name);

    list($reply, $status) = $client->SayHello($request)->wait();
    echo 'status code: ' . $status->code;
    if ($status->details) {
        echo ', details: ' . $status->details;
    }

    echo PHP_EOL;
    if ($status->metadata) {
        echo 'Meta data: ' . PHP_EOL;
        print_r($status->metadata);
    }

    return $reply->getMessage();
}

function GetUser($name){
    $client = new App\Grpc\User\UserInfoServiceClient('localhost:50051', [
        'credentials' => Grpc\ChannelCredentials::createInsecure(),
    ]);

    $request = new App\Grpc\User\UserReq();
    $request->setName($name);

    list($reply, $status) = $client->GetUserInfo($request)->wait();
    echo 'status code: ' . $status->code;
    if($status->code != 0){
        echo "grpc exec fail";
        return [];
    }

    if ($status->details) {
        echo ', details: ' . $status->details;
    }

    echo PHP_EOL;
    if ($status->metadata) {
        echo 'Meta data: ' . PHP_EOL;
        print_r($status->metadata);
    }

    echo "id: ",$reply->getId();
    echo "name: ",$reply->getName();
    
    var_dump($reply->getTitle());
    var_dump($reply->getTitle()[0],count($reply->getTitle()));
}

// 把一个对象结构递归变成一数组结构
function o2a($d)
{
    if (is_object($d)) {
        if (method_exists($d, 'getArrayCopy')) {
            $d = $d->getArrayCopy();
        } elseif (method_exists($d, 'getArrayIterator')) {
            $d = $d->getArrayIterator()->getArrayCopy();
        } elseif (method_exists($d, 'toArray')) {
            $d = $d->toArray();
        } else {
            $d = get_object_vars($d);
        }
    }
    if (is_array($d)) {
        return array_map(__FUNCTION__, $d);
    }
    return $d;
}

$name = !empty($argv[1]) ? $argv[1] : 'world';
echo greet($name) . PHP_EOL;

echo "getUser".PHP_EOL;
GetUser($name);
