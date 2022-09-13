<!DOCTYPE html>
<!-- タイムアタックを選択した人専用の画面 --> 
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>英単語_タイムアタック</title>
     <!-- スタイルシートの読み込み -->
    <link rel="stylesheet" href="https://englishquizsample.herokuapp.com/style.css">
     <!-- javascriptファイルの読み込み -->
    <script type="text/javascript" src="timeattack.js"></script>
</head>
<body>
<!-- 制限時間表示エリア --> 	
<p id="timer"></p>
<!-- クイズ結果表示エリア --> 
<div id="quizResult"></div>

<div class="ButtonArea">
        ■下のボタン記載の制限時間内に何問正解できるかに挑戦しよう！<br>
        ※制限時間終了後、正答率が表示されるので単語学習の学習到達度の目安にしてください。<p>
            <center>
                <button name="timeSec" id="60" class="choice"  onclick="clk()">1分</button>
                <button name="timeSec" id="600" class="choice" onclick="clk()">10分</button>
                <button name="timeSec" id="900" class="choice" onclick="clk()">15分</button>
            </center>
    </div>

</body>
</html>
