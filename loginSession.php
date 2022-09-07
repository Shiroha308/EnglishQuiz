<?php
//top.phpのセッションを記憶する。
session_start();

var_dump($_SESSION);

//メッセージ削除のために、session_destroy();を追記
$_SESSION = array();
session_destroy();

?>


<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="login.css">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>英単語学習アプリ_ログイン画面</title>
</head>
<body>


<!-- ログイン画面 -->
<!-- ログイン情報に問題がなければ、index.php(英語学習の画面)へ飛ばす -->
<form action="top.php" method="POST" name="login_form">
  <div class="login_form_top">
    <h2>英単語学習アプリ_ログイン画面</h2>
    <p>メールアドレス、パスワードをご入力の上、<br><strong>「ログイン」</strong>ボタンをクリックして下さい。</p>
  </div>
  <div class="login_form_btm">
    <input type="email" name="email" placeholder="メールアドレスを入力してください"><br>
    <input type="password" name="password" placeholder="パスワードを入力してください"><br>
  </div>
  <button type="submit">ログイン</button>
</form>
    <a href="http://localhost/webapp/login.php">新規登録を行う場合はこちらから</a>
</body>
</html>