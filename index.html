<?php
//リダイレクトして、二重投稿を防ぐ
if($_SERVER['REQUEST_METHOD']==='POST'){		
    header('Location:https://englishquizsample.herokuapp.com/');
}
?>

<!-- 掲示板用のPHPプログラムを記載 --> 

<?php
    date_default_timezone_set("Asia/Tokyo");

    echo shell_exec("python script.py");

    $pdo = null;
    $stmt = null;
    $error_messages = array();
    //DB(MySQL接続)を行う
    try{
        $pdo = new PDO('mysql:dbname=heroku_e8f3a7d35b48f46;host=us-cdbr-east-06.cleardb.net;charset=utf8','b107445cca4e99','a12347dc');
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
        $error_messages["username"] = "名前を入力してください。";
    }    
    if(empty($_POST["comment"])){
        echo "コメントを入力してください。";
        $error_messages["comment"] = "コメントを入力してください。";
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

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>英語アプリ_メイン画面</title>
     <!-- スタイルシートの読み込み -->
    <link rel="stylesheet" href="style.css">
     <!-- javascriptファイルの読み込み -->
<!-- pythonファイルの読み込み -->

</head>
<body>
    <!-- ヘッダーメニューの作成 -->
    <nav>
     <ul>
     <li><a class=”current” onclick="window.open('https://englishquizsample.herokuapp.com/')">ホーム</a></li>
      <li><a onclick="window.open('https://englishquizsample.herokuapp.com/quiz/easy.php')">初級</a></li>
      <li><a onclick="window.open('https://englishquizsample.herokuapp.com/quiz/normal.php')">中級</a></li>
      <li><a onclick="window.open('https://englishquizsample.herokuapp.com/quiz/dificcult.php')">上級</a></li>
      <li><a onclick="window.open('https://englishquizsample.herokuapp.com/quiz/timeattack.php')">タイムアタック</a></li>
    </ul>
    </nav>
    <!-- 下記に内容を記述 -->
    <h2>難易度別単語テスト</h2>
    
    <div class="ButtonArea">
    ■難易度別に単語テストに挑戦してみよう！<br>
    ※上級は相当難しいので、腕に自信がある人のみ挑戦してみてください。<p>
    <center>
    <button name="timeSec" id="" class="choice"  onclick="window.open('https://englishquizsample.herokuapp.com/quiz/easy.php')">初級</button>
    <button name="timeSec" id="" class="choice" onclick="window.open('https://englishquizsample.herokuapp.com/quiz/normal.php')">中級</button>
    <button name="timeSec" id="" class="choice" onclick="window.open('https://englishquizsample.herokuapp.com/quiz/difficult.php')">上級</button>
    </center>
    </div>
    
    <!-- 矢印記号を下記に挿入 -->
    <center class="typesquare_tags">
        <div class="triangle"></div>
    </center>
    
    <h2>単語テスト【タイムアタック】※実装途中</h2>
    
    <div class="ButtonArea">
        ■下のボタン記載の制限時間内に何問正解できるかに挑戦しよう！<br>
        ※制限時間終了後、正答率が表示されるので単語学習の学習到達度の目安にしてください。<p>
            <center>
                <button name="timeSec" id="60" class="choice"  onclick="clk()">1分</button>
                <button name="timeSec" id="600" class="choice" onclick="clk()">10分</button>
                <button name="timeSec" id="900" class="choice" onclick="clk()">15分</button>
            </center>
</div>



<div class="openchat">
    <h2>オープンチャット</h2>
    <p>※好きなコメントの投稿が可能です。</p>
    <p>チャットや周りのプレイ状況を確認する際に確認してみてください。</p>
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

<!-- 矢印記号を下記に挿入 -->
<center class="typesquare_tags">
	<div class="triangle"></div>
</center>
<div class="future">
アプリ作成にあたり、注力したポイント<br>
    <ul><strong>＜javascript＞</strong></ul>
        <li>タイムアタック終了後、ポップアップを作成</li>
        <li>「簡単」「普通」「難しい」モードで100問ずつ問題を作成</li>
    <ul><strong>＜CSS＞</strong></ul>
         <li>タイムアタック終了後、ポップアップを作成</li>
         <li>「簡単」「普通」「難しい」モードで100問ずつ問題を作成</li>
    <ul><strong>＜Python＞</strong></ul>
         <li>画像をスクレイピングし、【】内の単語の画像を表示</li>
    <ul><strong>＜PHP＞</strong></ul>
         <li>コメントにjavascriptなど打たれないよう、エスケープ処理</li>
         <li>ログイン画面の実装</li>
         <li>掲示板の投稿がリロードで追加される現象を修正</li>
    <ul><strong>■今後の改善点</strong></ul>
         <li>・掲示板の削除機能の追加</li>
         <li>・セキュリティ対策の充実化</li>   
</div>


<!-- 予備エリア -->

<!-- ページを訪れるたびにポップアップを表示させる -->
<!-- 必要に応じてlocalStrage⇄SessionStrageへ変更 -->

<div class="bg_onetime_popup">
    <div class="onetime_popup">
        <p class="onetime_popup_title">チュートリアル</p>
        <div class="onetime_popup_content">
            <p>このアプリは英単語を勉強するためのアプリです。</p>
            <p>制限時間内に何問解けるか試せる<br></p>
            <strong>・タイムアタック形式</strong><br>
            <p>難易度別に実力を試せる</p>
            <strong>・難易度別単語テスト</strong><br>
            <p>の2モードがあります。</p>
            好きなモードをプレイして語彙力を強化しましょう！
        </div>
    </div>
</div>

</body>
</html>
