//-----------------------------【初級のバージョン】---------------------------------
let Q = [//クイズの内容を全部入れる
'Q.【sycophancy】と同じ意味の単語は？',//問題
' onclick = "Question(1);">obsequiousness',//答え1
' onclick = "Question(2);">bad-mouthing', //答え2
' onclick = "Question(2);">detraction', //答え3
'【sycophancy】は、”おしゃべり”、”おべっか”という意味があります。',//解説

'Q.【oblique】と同じ意味の単語は？', 
' onclick = "Question(2);">spare',
' onclick = "Question(1);">slanted',
' onclick = "Question(2);">explicit',
'【oblique】は”遠回しの”、”斜めの”という意味があります。',

'Q.【burrow】と似た意味の単語は？', 
' onclick = "Question(2);">value',
' onclick = "Question(1);">tunnel',
' onclick = "Question(2);">channel',
'【burrow】は”巣穴”、”潜り穴”という意味があります。',

'Q.【piquant】と同じ意味の単語は？', 
' onclick = "Question(2);">sweet',
' onclick = "Question(1);">pungent',
' onclick = "Question(2);">sultry',
'【piquant】は”ピリッとくる辛さ”という意味があります。',

'Q.【fruit pulp】のpulpはどんな意味？', 
' onclick = "Question(1);">果肉',
' onclick = "Question(2);">果汁',
' onclick = "Question(2);">種',
'【pulp】には”果肉”という意味があります。',

'Q.【腰】が痛い時はどこへ行く？？', 
' onclick = "Question(2);">dermatology',
' onclick = "Question(2);">cardiology ',
' onclick = "Question(1);">osteopathic',
'【osteopathic】は”整体師”、という意味があります。',

'Q.【inaugurate】と同じ意味の単語は？？', 
' onclick = "Question(2);">abolish',
' onclick = "Question(1);">initiate',
' onclick = "Question(2);">terminate',
'【inaugurate】は”就任する、始める”、という意味があります。',

'Q.【amber】と同じ意味の単語は？？', 
' onclick = "Question(1);">translucent fossil resin',
' onclick = "Question(2);">gummy',
' onclick = "Question(2);">strand',
'【amber】は"琥珀”、という意味があります。',

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
