//-----------------------------【初級のバージョン】---------------------------------
let Q = [//クイズの内容を全部入れる
'Q.【relationship】と同じ意味の単語は？',//問題
' onclick = "Question(1);">link',//答え1
' onclick = "Question(2);">divorce', //答え2
' onclick = "Question(2);">division', //答え3
'【relationship】は、”関係性”という意味があります。',//解説

'Q.【achieve】と同じ意味の単語は？', 
' onclick = "Question(2);">archive',
' onclick = "Question(2);">allocate',
' onclick = "Question(1);">complete',
'【achieve】は”達成する”という意味があります。',

'Q.【theory】と似た意味の単語は？', 
' onclick = "Question(2);">value',
' onclick = "Question(2);">concept',
' onclick = "Question(1);">throw',
'【theory】は”仮説、設定”という意味があります。',

'Q.【fold】と同じ意味の単語は？', 
' onclick = "Question(2);">unfold',
' onclick = "Question(1);">bend',
' onclick = "Question(2);">folder',
'【fold】は”折り曲げる”という意味があります。',

'Q.【ancestor】と同じ意味の単語は？', 
' onclick = "Question(1);">forebear',
' onclick = "Question(2);">liner',
' onclick = "Question(2);">planner',
'【ancestor】には”祖先”という意味があります。',

'Q.【audience】と同じ意味の単語は？', 
' onclick = "Question(2);">authority',
' onclick = "Question(2);">augment',
' onclick = "Question(1);">gallery',
'【audience】は”聴衆”、という意味があります。',

'Q.【deny】と同じ意味の単語は？？', 
' onclick = "Question(1);">decline',
' onclick = "Question(2);">accept',
' onclick = "Question(2);">climb',
'【deny】は”否定す、却下する”、という意味があります。',

'Q.【serve】と同じ意味の単語は？？', 
' onclick = "Question(1);">provide',
' onclick = "Question(2);">severe',
' onclick = "Question(2);">saver',
'【serve】は"提供する”、という意味があります。',

];

//質問数の数を取得し、5つの項目でひとつの設問と認識させる。【質問、設問1,設問2,設問3,説明】
let r_1 = Q.length / 5;
//ランダムな数字を生成
let r_2 = Math.floor( Math.random() * r_1 ) ;
console.log(r_2);
//5枚してそれぞれの問題文を表示するように変更
let R = (r_2 * 5);

function Question(number){
  if(number === 0){
  //0=「次の問題」が選択された時、問題文を表示する。
   r_1 = Q.length / 5;
	 r_2 = Math.floor( Math.random() * r_1 );
	 R = (r_2 * 5);

 	 document.getElementById("ox").innerHTML = '';
	 document.getElementById("quiz").innerHTML = '';
	 quiz = document.getElementById('quiz');
   //クイズの問題数をカウント
   QuestionNum++;
   quiz.insertAdjacentHTML('afterbegin', '<a>'+Q[R]+'</a><br>');
   quiz.insertAdjacentHTML('afterbegin','<a>第' +QuestionNum+ '問<br/></a>');
	 quiz.insertAdjacentHTML('beforeend', '<button class="choice"'+Q[R+1]+'</button><br/>');
	 quiz.insertAdjacentHTML('beforeend', '<button class="choice"'+Q[R+2]+'</button><br/>');
	 quiz.insertAdjacentHTML('beforeend', '<button class="choice"'+Q[R+3]+'</button><br/>');

  }else if(number === 1){
   //正解した時の表示内容
 	 document.getElementById("ox").innerHTML = '<p>正解！</p>';
	 document.getElementById("quiz").innerHTML = '<p>'+Q[R+4]+'</p>';
   document.getElementById("next").innerHTML = '<p><button class="buttonnext" onClick="Question(0);">次の問題へ</button></p>';
   //正解した時のテキスト表示
   right++;
   column = document.getElementById('quiz');
   column.insertAdjacentHTML('beforeend', '<a>正解数：　' +right+ '<br>誤答数：　' +wrong+ '<br>正答率は' +Math.floor(right/QuestionNum*100)+ '%です。</a>');
   
  }else if(number === 2){
   //不正解の時のテキスト表示
 	 document.getElementById("ox").innerHTML = '<p>不正解</p>';
	 document.getElementById("quiz").innerHTML = '<p>'+Q[R+4]+'</p>';
 	 document.getElementById("next").innerHTML = '<p><button class="buttonnext" onClick="Question(0);">次の問題へ</button></p>'; 
   wrong++
   column = document.getElementById('quiz');
   column.insertAdjacentHTML('beforeend', '<a>正解数：　' +right+ '<br>誤答数：　' +wrong+ '<br>現在の正答率は' +Math.floor(right/QuestionNum*100)+ '%です。</a>');
  }
}
//HTML側で初期画面にクイズの内容を表示※20220902時点で表示しない設定に変更
document.write('<div class="quizarea">');
//○か×かを記載するエリア
document.write('<p id="ox"></p>');
//中にクイズを格納
document.write('<p id="quiz">');
//質問数を記載
var QuestionNum = 1;
//正答数
var right = 0;
//誤答数
var wrong = 0;
document.write('<a>第' +QuestionNum+ '問<br/></a>');
document.write('<a>' +Q[R+0] +'<br/></a>');
document.write('<button class="choice"'+ Q[R+1] +'</button><br/>');
document.write('<button class="choice"'+ Q[R+2] +'</button><br/>');
document.write('<button class="choice"'+ Q[R+3] +'</button><br/>');
document.write('<p id="next"><button class="buttonnext" onClick="Question(0);">次の問題へ</button></p>');
document.write('</div>');

//問題終了後の画面を表示させる

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('finish').addEventListener('click',function(){
  const result= document.getElementById('quizResult');
  //関数の呼び出し
  Question();
  result.innerHTML = '<p class="result">最終結果</p><a>正解数：　' +right+ '<br>誤答数：　' +wrong+ '<br>正答率は' +Math.floor(right/QuestionNum*100)+ '%でした！</a><p>間違えた単語を復習してどんどん単語を覚えましょう！</p>';  
  })
},false)
