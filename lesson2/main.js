'use strict';
//配列
{
	const scores = [80, 90, 40];
	console.log(scores[2]); //40
	// データの操作　unshift() 先頭に追加　push() 末尾に追加
	//shiht() 先頭から削除 pop()末尾から削除
	scores.push(60, 50);
	scores.shift();
	// 90,40,60,50
	console.log(scores);

	//値の更新 90,40,44,50
	scores[2] = 44;
	console.log(scores);

	//splice(変化が開始する位置, 削除数, 追加する要素 )
	scores.splice(1, 1,40, 50);
	console.log(scores);  //[90, 40, 50, 44,60]40が削除、40,50追加

	//別の配列を配列に追加
	const otherScores = [10, 20];
	const totals = [80, 90, 40,70, ...otherScores];
	console.log(totals);

	// 配列の要素をsumで計算
	function sum(a,b){
		console.log(a+b);
	}
	sum(...otherScores);

	//分割代入 配列の要素を他の定数に代入
	const[a,b,...others] = scores;
	console.log(a);
	console.log(b);
	console.log(others);

	//分割代入で値の交換
	let x = 30;
	let y = 70;
	[x,y] = [y,x];
	console.log(x);
	console.log(y);

	//配列の要素数
	console.log(scores.length);

	console.log(`Score: ${scores[0]}`); //Score: 80

	//繰り返し
	// for (let i = 0; i < 3; i++){  処理の範囲＝要素数を代入
	for (let i = 0; i < scores.length; i++){
		console.log(`Score:${i} ${scores[i]}`);
	}

	const results = [80, 90, 70, 40];
	scores.forEach((result, index) => {
		console.log(`Result: ${index}: ${result}`);
	});

	// 配列から要素を取り出して処理を行い、別の配列を作成
	const prices = [180, 190, 200];
	const updatePrices = prices.map(price =>  price + 20);
	console.log(updatePrices);

	// 条件に合う要素だけ取得する
	const numbers = [1, 4, 7, 8, 10];
	const evenNumbers = numbers.filter(number => number % 2 === 0);
		// if (number % 2 === 0){
		// 	return true;
		// } else {
		// 	return false;
		// }
	// });
	console.log(evenNumbers);




}



