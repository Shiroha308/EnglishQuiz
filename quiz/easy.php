<?php
    include ( dirname(__FILE__) . '/../debug.php');
    include ( dirname(__FILE__) . '/../environment.php');
?>

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

</head>
<body>
	
<!-- 問題終了後の表示エリアを作成 -->
	<p id="finish" style="text-align: center;"><button class="buttonnext">問題を終了する</button></p>
	<div id="quizResult"></div>
	
<!-- ヘッダーメニューの作成 -->
    <nav class="pc-nav">
        <ul>
	    <li><a href="https://englishquizsample.herokuapp.com">ホーム</a></li>
            <li><a href="https://englishquizsample.herokuapp.com/quiz/easy.php">初級</a></li>
            <li><a href="https://englishquizsample.herokuapp.com/quiz/normal.php">中級</a></li>
            <li><a href="https://englishquizsample.herokuapp.com/quiz/difficult.php">上級</a></li>
            <li><a href="https://englishquizsample.herokuapp.com/quiz/timeattack.php">タイムアタック</a></li>
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
