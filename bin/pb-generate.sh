#!/usr/bin/env bash
root_dir=$(cd "$(dirname "$0")"; cd ..; pwd)

protoExec=$(which "protoc")
if [ -z $protoExec ]; then
    echo 'Please install protoc!'
    exit
fi

protos_dir=$root_dir/proto
pb_dir=$root_dir/pb
go_client_dir=$root_dir/clients/go

mkdir -p $pb_dir
mkdir -p $go_client_dir

rm -rf $root_dir/pb/*

echo "\n\033[0;32mGenerating codes...\033[39;49;0m\n"
echo "generating golang stubs..."

cd $protos_dir

$protoExec -I $protos_dir --go_out=plugins=grpc:$root_dir/pb $protos_dir/*.proto

echo "generating golang code success"

echo "\n\033[0;32mGenerate codes successfully!\033[39;49;0m\n"

exit 0
