//-----------------------------【中級のバージョン】---------------------------------
let Q = [//クイズの内容を全部入れる
'Q.【corruption】と同じ意味の単語は？',//問題
' onclick = "Question(1);">bribery',//答え1
' onclick = "Question(2);">faint', //答え2
' onclick = "Question(2);">tribe', //答え3
'【corruption】は、”腐敗、汚職”という意味があります。',//解説

'Q.【criteria】と同じ意味の単語は？', 
' onclick = "Question(2);">focus',
' onclick = "Question(1);">benchmark',
' onclick = "Question(2);">expllicit',
'【criteria】は”基準”という意味があります。',

'Q.【disability】と似た意味の単語は？', 
' onclick = "Question(2);">ability',
' onclick = "Question(1);">impairment',
' onclick = "Question(2);">affection',
'【disability】は”障害”という意味があります。',

'Q.【essence】と同じ意味の単語は？', 
' onclick = "Question(2);">edge',
' onclick = "Question(1);">core',
' onclick = "Question(2);">around',
'【essence】は”本質”という意味があります。',

'Q.【incentive】はどんな意味？', 
' onclick = "Question(1);">motivation',
' onclick = "Question(2);">agree',
' onclick = "Question(2);">antagonist',
'【incentive】には”動機”という意味があります。',

'Q.【speculation】と同じ意味の単語は？？', 
' onclick = "Question(2);">wager',
' onclick = "Question(2);">carbon ',
' onclick = "Question(1);">conjecture',
'【speculation】は”整体師”、という意味があります。',

'Q.【supervisor】と同じ意味の単語は？？', 
' onclick = "Question(2);">chief',
' onclick = "Question(1);">slide',
' onclick = "Question(2);">cuffs',
'【supervisor】は”上司”、という意味があります。',

'Q.【idiot】と同じ意味の単語は？？', 
' onclick = "Question(1);">foolish',
' onclick = "Question(2);">smart',
' onclick = "Question(2);">tacky',
'【idiot】は"バカ”、という意味があります。',

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
   column.insertAdjacentHTML('beforeend', '<a>正解数：　' +right+ '<br>誤答数：　' +wrong+ '<br>現在の正答率は' +Math.floor(right/QuestionNum*100)+ '%です。</a>');
   
  }else if(number === 2){
   //不正解の時のテキスト表示
 	 document.getElementById("ox").innerHTML = '<p>不正解</p>';
	 document.getElementById("quiz").innerHTML = '<p>'+Q[R+4]+'</p>';
 	 document.getElementById("next").innerHTML = '<p><button class="buttonnext" onClick="Question(0);">次の問題へ</button></p>'; 
   wrong++
   column = document.getElementById('quiz');
   column.insertAdjacentHTML('beforeend', '<a>正解数：　' +right+ '<br>誤答数：　' +wrong+ '<br>正答率は' +Math.floor(right/QuestionNum*100)+ '%です。</a>');
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
