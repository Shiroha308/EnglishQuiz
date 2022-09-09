<?php

//
//openchatデータベースへアクセス
//
    $pdo = null;
    $stmt = null;
    $error_messages = array();
    //openchat-tableへのアクセスを行う
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=xs849901_openchat', "xs849901_shizuma", "clannad7");
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
