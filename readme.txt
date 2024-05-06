cd C:\Users\y_wak\DockerWork\

npx create-react-app my-app

cd react-app

Dockerfile作成
----------------------------------
# Node.jsの最新版をベースにする
FROM node:14

# コンテナ内の作業ディレクトリを指定
WORKDIR /usr/src/app
-----------------------------------


docker-compose.yml作成
------------------------------------
version: '3'
services:
  react-app:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./react-app:/usr/src/app
    ports:
      - "3000:3000"
------------------------------------

docker-compose build

docker-compose up

//マテリアルUI追加
npm install @mui/material @emotion/react @emotion/styled

// ルーター追加
npm install react-router-dom

// 警告が出たためインストール
npm install --save-dev @babel/plugin-proposal-private-property-in-object
