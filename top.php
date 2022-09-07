<?php
//
//loginSession.phpでログインに問題がないかを確認するPHPファイル
//

require_once ('environment.php');
require_once ('userinfo.php');

//sessionを開始する。
session_start();

$error = [];
//validationを実装

if(!$email = filter_input(INPUT_POST, "email")){
    $error['email'] = "メールアドレスを記入してください。<br>";
}

if(!$password = filter_input(INPUT_POST, "password")){
    $error['password'] = "パスワードを記入してください。<br>";
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
//エラーがあった場合、ログイン画面へ戻す
if (count($error) > 0){
    $_SESSION = $error;
    header('Location: https://englishquizsample.herokuapp.com/loginSession.php');
    return;
}
//ログインが成功した時の処理
$result = userinfo::login($email, $password);

//ログイン失敗時の処理
//userinfoのlogin(email,password)関数で問題があった場合の処理
if(!$result){
    header('Location: https://englishquizsample.herokuapp.com/loginSession.php');
    return;
}
//全てに問題がなければユーザー登録完了させる。
echo 'ログイン成功です。';
//英語学習アプリのメイン画面へ飛ばす
header('Location: https://englishquizsample.herokuapp.com/');
?>

</body>
</html>
