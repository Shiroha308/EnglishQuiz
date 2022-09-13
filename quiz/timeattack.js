//-----------------------------【タイムアタックのバージョン：初級、中級、上級全て含む】---------------------------------
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
//quizareaに対して、display="none"を設定
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


//-----------------------------【※要検討：ボタンを押されるまでクイズを非表示】---------------------------------
function clk(e){
    /// 要素IDを取得する
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
//ボタンが押されるまで、クイズを非表示にする
    var onoffquiz = document.getElementsByClassName("quizarea");
    Array.from(onoffquiz).forEach((x) => {
      if(x.style.visibility == "hidden"){
        x.style.removeAttribute == "style";
        console.log("ない");
      }else{
        x.style.visibility == "none";
      }
    })
    /// 要素IDに応じて処理を変える...
    switch(elemId){
      case '60': 
      timeget(elemId);
        break;
      case '600':
      timeget(elemId);
        break;
      default:
      timeget(elemId);
    }
  }

//-----------------------------【※タイマー作動の関数】---------------------------------

function timeget(elemId) {
  let time = elemId
//関数の名前を入れてカウントダウンを1秒/1回作動する。
  let OnOff = setInterval(function(){
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  time --;
  //タイマーが0になったら停止し、ポップアップを表示。
  if(time < 0){
      clearInterval(OnOff);
  //解答した結果を表示させる。
  const result= document.getElementById('quizResult');
  //関数の呼び出し
  Question();
  result.innerHTML = '<p class="result">最終結果</p><a>正解数：　' +right+ '<br>誤答数：　' +wrong+ '<br>正答率は' +Math.floor(right/QuestionNum*100)+ '%でした！</a><p>間違えた単語を復習してどんどん単語を覚えましょう！</p>';
  }
  //秒数が1桁の時に0を付け加えるようにする。
  seconds = seconds < 10 ? '0' + seconds : seconds;
  console.log(minutes +':'+seconds);
  document.getElementById("timer").innerHTML = "<strong>制限時間　"+minutes+":"+seconds+"</strong>";
  }
  ,1000);
  //ボタンを押した後、操作を無効にする。
  const btnDisable1 = document.getElementById("60");
  const btnDisable2 = document.getElementById("600");
  const btnDisable3 = document.getElementById("900");
  btnDisable1.disabled = true
  btnDisable2.disabled = true
  btnDisable3.disabled = true
}






