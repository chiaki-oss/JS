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
}


