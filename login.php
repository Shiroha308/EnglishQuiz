<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://englishquizsample.herokuapp.com/login.css">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>英単語学習アプリ_新規登録画面</title>
</head>
<body>

<!-- ログイン画面 -->
<form action="register.php" method="POST" name="login_form">
  <div class="login_form_top">
    <h2>英単語アプリ_新規登録画面</h2>
    <p>ユーザーID、パスワードをご入力の上、<br><strong>「新規登録」</strong>ボタンをクリックして下さい。</p>
  </div>
  <div class="login_form_btm">
    <input type="text" name="username" placeholder="ユーザー名を決めて下さい"><br>
    <input type="email" name="email" placeholder="メールアドレスを入力してください"><br>
    <input type="password" name="password" placeholder="パスワードを英数字8文字以上16文字以下で入力してください"><br>
    <input type="password" name="password_conf" placeholder="設定したパスワードを再度入力してください">
  </div>
  <button type="submit">新規登録</button>
  <p>ゲストユーザーは、<strong>「ゲスト」</strong><br>よりお進み下さい。</p>
  <button type="button" onclick="location.href='https://englishquizsample.herokuapp.com/'">ゲスト</button>
</form>
</body>
</html>
