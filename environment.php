<?php
//
//loginデータベースへアクセス
//

define('DB_HOST', 'localhost');
define('DB_NAME', 'login');
define('DB_USER', 'root');
define('DB_PASS', 'Clannad7');

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

//
//openchatデータベースへアクセス
//
    $pdo = null;
    $stmt = null;
    $error_messages = array();
    //openchat-tableへのアクセスを行う
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=openchat', "root", "Clannad7");
    }catch(PDOException $e){
        echo $e->getMessage();
    }    
    //DBからのデータを格納する配列を用意する
    $comment_array = array();

    //フォームを打ち込んだ時、DBへデータを追加できるようにする
    if(!empty($_POST["submitButton"])){

    //名前が入力されているか確認
    if(empty($_POST["username"])){
        echo "名前を入力してください。";
        $error_messages["username"] = "";
    }    
    if(empty($_POST["comment"])){
        echo "コメントを入力してください。";
        $error_messages["comment"] = "";
    }       

    if(empty($error_messages)){
    //データを送信する
        $postDate = date("Y-m-d H:i:s");
    //PHP PDO公式ドキュメントからコピー
        $stmt = $pdo->prepare("INSERT INTO `openchat-table` (`username`, `comment`, `postDate`) VALUES (:username, :comment, :postDate);");
        $stmt->bindParam(':username', $_POST['username'], PDO::PARAM_STR);
        $stmt->bindParam(':comment', $_POST['comment'], PDO::PARAM_STR);
        $stmt->bindParam(':postDate', $postDate, PDO::PARAM_STR);
    //executeで実行する
        $stmt->execute();
    }
    }   
    //DBからデータを取集する
    $sql = "SELECT `id`,`username`,`comment`,`postDate` FROM `openchat-table`;";
    $comment_array = $pdo->query($sql);
    //DBの接続を閉じる
    $pdo = null;
?>
