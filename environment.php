<?php
//
//DB接続専用のファイルです。
//

define('DB_HOST', 'us-cdbr-east-06.cleardb.net');
define('DB_NAME', 'heroku_e8f3a7d35b48f46');
define('DB_USER', 'b107445cca4e99');
define('DB_PASS', 'a12347dc');

function connect(){
    $host = DB_HOST;
    $db   = DB_NAME;
    $user = DB_USER;
    $pass = DB_PASS;

    $dsn  = "mysql:host=$host;dbname=$db;charset=utf8mb4";
try{
//PDOのオプション部分を設定
    $pdo  = new PDO($dsn, $user , $pass ,[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);
    return $pdo;
    echo '成功です。';
} catch(PDOException $e){
    echo '接続失敗'. $e->getMessage();
    }
}
//成功と画面上に表示される
connect();

//①フォームからデータを渡す
//②受け取ってvalidationを確認
//③ユーザ情報を登録する

?>
