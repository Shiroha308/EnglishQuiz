<?php
//
//ユーザー登録の結果を表示するための画面
//

require_once ('environment.php');
require_once ('userinfo.php');

$error = [];
//validationを実装
if(!$username = filter_input(INPUT_POST, "username")){
    $error[] = "ユーザー名を記入してください。<br>";
}
if(!$email = filter_input(INPUT_POST, "email")){
    $error[] = "メールアドレスを記入してください。<br>";
}

$password = filter_input(INPUT_POST, "password");
$password_conf = filter_input(INPUT_POST, "password_conf");

//正規表現で整合性を取る。
if (!preg_match("/\A[a-z\d]{8,16}+\z/i",$password)){
    $error[] = "パスワードは英数字8文字以上16文字以下にしてください。<br>";
}

if($password !== $password_conf){
    $error[] = "確認用パスワードが異なっています";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <title>ユーザー登録完了画面</title>
</head>
<body>

<?php 
//エラーの内容を表示させる
foreach($error as $e){
    echo $e;
}
//エラーがなければユーザー登録が完了
if (count($error) === 0){
//問題なければ、userinfo.php内でMySQLデータベースへ値を格納。
    echo "登録に成功しました！";
    header( "refresh:1;url=index.php" );
    return;
    $Created = userinfo::createUser($_POST);
    if(!$Created){
        echo "下記のボタンからお手数ですが、再度登録をお願い致します。";
    }
}
?>



</body>
</html>
