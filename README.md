# 説明
codeigniter4のモジュール機能を利用してshopifyのアプリ開発を機能ごとに分離させる最小限のテンプレートです。

http://blog.a-way-out.net/blog/2021/11/29/codeigniter4-modules/

## モジュール例
ShopifyAuth → アプリのインストールからapiの認証の検証までの機能
ShopifyFrontend → reactを利用したフロントエンドの機能をここで開発していきます。
ProductApi → ShopifyAuthのapiコントローラークラスを継承した製品取得サンプル例

apiのコントローラー事にモジュールを作成していきます。
「ShopifyAuth」「ShopifyFrontend」をコア機能

### 例)
todoリストを作成したい場合は
「TodoApi」モジュールを作成して「ShopifyFrontend」からTodoApiに対してfetchさせて行きます。
