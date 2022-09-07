<!DOCTYPE html>
<!-- 初級ボタンを選択した人専用の画面 --> 
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>英単語_初級コース</title>
     <!-- スタイルシートの読み込み -->
    <link rel="stylesheet" href="https://englishquizsample.herokuapp.com/style.css">
     <!-- javascriptファイルの読み込み -->
    <script type="text/javascript" src="https://englishquizsample.herokuapp.com/quiz/easy.js"></script>
<?php
    date_default_timezone_set("Asia/Tokyo");
    echo shell_exec("python script.py");
    $pdo = null;
    $stmt = null;
    $error_messages = array();
    //DB(MySQL接続)を行う
    try{
        $pdo = new PDO('mysql:dbname=heroku_e8f3a7d35b48f46;host=us-cdbr-east-06.cleardb.net;charset=utf8','b107445cca4e99','a12347dc');
	echo "成功しました";
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
</head>
<body>
    <!-- ヘッダーメニューの作成 -->
    <nav>
     <ul>
     <li><a class=”current” onclick="window.open('http://localhost/webapp/index.php')">ホーム</a></li>
      <li><a onclick="window.open('http://localhost/webapp/quiz/easy.php')">初級</a></li>
      <li><a onclick="window.open('http://localhost/webapp/quiz/normal.php')">中級</a></li>
      <li><a onclick="window.open('http://localhost/webapp/quiz/difficult.php')">上級</a></li>
      <li><a onclick="window.open('http://localhost/webapp/quiz/timeattack.php')">タイムアタック</a></li>
    </ul>
    </nav> 
<!-- 矢印記号を下記に挿入 -->
<center class="typesquare_tags">
	<div class="triangle"></div>
</center>


<div class="openchat">
    <h2>オープンチャット</h2>
    <p>他の人にオススメしたい単語などをチャット欄で共有しましょう！</p>
    <!-- 送信フォームを設定 -->
    <div class="boardwrapper">
     <section>
     <!-- DBから取得した値を下記に反映 -->
        <?php foreach($comment_array as $comment): ?>
        <article>
            <div class="wrapper">
                <div class="namearea">
                    <span>名前：</span>
                    <a class="username"><?php echo $comment["username"]; ?></a>
                    <time><?php echo $comment["postDate"]; ?></time>
                </div>
                <p class="comment"><?php echo $comment["comment"]; ?></p>
            </div>
        </article>
        <?php endforeach; ?>
     </section>
    </div>
        <!-- PHP/POSTメソッドの記載を入れる -->
    <form class="formwrapper" method="post">
        <label for="">名前</label><br>
        <input type="text" name="username" placeholder="ユーザー名"><br>
        <a>コメント</a><br>
        <div>
            <textarea class="commentTextarea" name="comment" placeholder="コメントを入力してください"></textarea>
        </div>
        <input type="submit" value="送信" name="submitButton"><p>
        ※投稿には名前、コメント両方の記入が必須となります。
    </form>
</div>



</body>
</html>
