'use strict'; //エラー確認

//定数
// const price = 150;

//変数
let price = 300;

price = 500; //再代入

//演算子
price += 100;
price *= 2;
price ++;
price --;

console.log(price);

console.log(price * 140);
console.log(price * 160);

// 1足す
// price = price + 1
// price +=1
// price++

// １引く
// price -= 1
// price --

// データ型確認
console.log(typeof 'hello');  //string
console.log(typeof 5);  //number
console.log(typeof true);  //boolean
console.log(typeof undefined);  //undefined
console.log(typeof null);  //null

console.log('5' * 3);  //文字列も数値に変換して計算可能　　１５
console.log('5' + 3);  //プラス演算子は文字列として連結させる　　５３
console.log(parseInt('5', 10) + 3);  //数値に変換（１０進数）して計算　８
console.log(parseInt('hello',10));  //文字列を変換しようとした場合　NaNに


console.log(price > 1000);  //true
//  > < >= <=  === !===
// false :  0,null,undefined,false

console.log(Boolean(0));
console.log(Boolean('hello'));


// 条件式
const score = 60;

// if (score >= 80) {
// 	console.log('Great!');
// } else if (score >= 60) {
// 	console.log('Good.');
// } else{
// 	console.log('Ok...');
// }
// ブロックの場合最後のセミコロンは不要

// 条件式 ? trueの処理　: falseの処理;
score >= 80 ? console.log('Geat') : console.log('Ok...');

const name = 'taguchi';

// if(score >= 50){
// 	if(name === 'taguchi'){
// 		console.log('Good Job!');
// 	}
// }
//論理演算子　&&(AND) ||(OR)  !(NOT)
if (score >= 50 && name === 'taguchi'){
	console.log('Good Job!');
}

const signal = 'yellow'

switch (signal){
	case 'red':
		console.log('Stop!');
		break;
	case 'yellow':
		console.log('Caution!');
		break;
	case 'blue':
	case 'green':
		console.log('Go!');
		break;
	default:
		console.log('Wrong Signal!')
		break;
}

// 繰り返し
for (let i = 1; i <= 10; i++){
	// console.log('hello');
	// console.log('hello'+i);
	console.log(`hello ${i}`);
	// if (条件)　continue; でスキップ breakで処理終了
}

let hp = 100;
while(hp > 0){
	console.log(`${hp}HP left!`);
	hp -= 15;
}

//　一連の処理を関数でまとめて呼び出す
//仮引数(message(='AD'は初期値設定。))を設定して実引数(Header/Footer)を入れるとその通り表示される
//実引数がないと初期値が返される
function showAd(message='Ad'){
	console.log('----------');
	console.log(`------${message} --------`);
	console.log('----------');
}

showAd('Header');
showAd('Footer');
showAd();

// return
function sum(a, b, c){
	// console.log(a+b+c);
	return a + b + c;
	//returnの下に処理を書いても処理されない
}

sum(1,2,3);
sum(3,4,5);

const total = sum(1,2,3)+sum(3,4,5);
console.log(total);

// 関数式
const add = (a, b, c)=>a + b + c;
// ↑短縮系 引数が１つの場合()は不要
// const add = function(a, b, c){
// 	return a + b + c;
// };

const answer = add(1,2,3)+add(3,4,5);
console.log(answer);













