<?php
//
//loginデータベースへアクセス
//

define('DB_HOST', 'localhost');
define('DB_NAME', 'xs849901_login');
define('DB_USER', 'xs849901_shizuma');
define('DB_PASS', 'clannad7');

function connect(){
    $host = DB_HOST;
    $db   = DB_NAME;
    $user = DB_USER;
    $pass = DB_PASS;

    $dsn  = "mysql:host=$host;dbname=$db";
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

