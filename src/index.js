/**
 * const.letなどの変数宣言
 */
/*
var val1 = "var変数";
console.log(val1);

//var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

//var変数を再宣言
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

//letは上書きが可能
val2 = "let上書き";
console.log(val2);

//letは再宣言が出来ない
let val2 = "let上書き";

const val3 = "const変数";
console.log(val3);

//const変数は上書きできない
//val3 = "const上書き"

//constは再宣言も出来ない
//const val3 = "const変数";

//constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name:"sake",
  age: 29.
};
val4.name = "さけ"
val4.addres = "okinawa"
console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
*/

/**
 * テンプレート文字列
 */
/*
const name = "yuto";
const age = 29;
//「私の名前はyutoです。年齢は29です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
*/

/**
 * アロー関数
 */

//従来の関数
/*
 function func1(str){
    return str;
 }

const func1 = function func1(str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
//const func2 = (str) => {
//  return str;
//};

//上の使い方と同じ内容になる。(中の処理が1行で終わるような単一式の場合のみ！)
//今回はreturnのみだったので可能！
const func2 = (str) => str;
console.log(func2("func2です"));

//const func3 = (num1,num2) =>{
//  return num1 + num2;
//};

const func3 = (num1,num2) => num1 + num2;

console.log(func3(10,20));
*/

/**
 * 分割代入
 */
/*
 const myprofile = {
  name: "yuto",
  age: 29
};
const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
console.log(message1);

const { name, age } = myprofile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myProfile = ["yuto", 29];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
*/

/**
 * デフォルト値
 */
/*
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
sayHello("yuto");
*/

/**
 * スプレッド構文 ...
 */
//配列の展開
/*
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);


//まとめる
//const arr2 = [1, 2, 3, 4, 5];
//const [num1, num2, ...arr3] = arr2;
//console.log(num1);
//console.log(num2);
//console.log(arr3);


//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

//const arr7 = [...arr4, ...arr5];
//console.log(arr7);
7
//const arr8 = arr4;
//console.log(arr8);
//arr8[0] = 100;
//console.log(arr4);
*/

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = ["oyafuso", "yuto", "paisen"];
//for(let index = 0; index < nameArr.length; index++){
//  console.log(nameArr[index]);
//}

//const nameArr2 = nameArr.map((name) => {
//  return name;
//})
//console.log(nameArr2);

//配列をループする際にも使用することが出来る！
//nameArr.map((name) => console.log(name));
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

/**
 * フィルター
 */
//return文で条件式を書いてそれに一致する内容だけ抽出する！
//const numArr = [1, 2, 3, 4, 5];
//const newNumArr = numArr.filter((num) => {
//  return num % 2 === 0;
//});
//console.log(newNumArr);

//const newNameArr = nameArr.map((name) => {
//  if (name === "yuto" || name === "paisen") {
//    return name;
//  } else {
//    return `${name}さん`;
//  }
//});
//console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？条件がtrueの時：条件がfalseの時
//const vall =  1 > 0 ? `trueです` : `falseです`;
//console.log(vall);

//const num = "1300";
//console.log(num.toLocaleString());

//const formattedNum = typeof num === `number` ? num.toLocaleString() : "数値を入力してください。"
//console.log(formattedNum);

//const checkSum = (num1, num2) => {
//  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
//}
//console.log(checkSum(50,20));

/**
 * 論理演算子の本当の意味を知ろう！ && ||
 */
//const flg1 = true;
//const flg2 = true;

//if(flg1 || flg2){
//  console.log("1か2はtrueになります。")
//}

//if(flg1 && flg2){
//  console.log("1も2もtrueになります。")
//}

// ||は左側がfalseなら右側を返す。
//const num = null;
//const fee = num || "金額未設定です。";
//console.log(fee);

//const num2 = 1;
//const fee2 = num2 || "金額未設定です。";
//console.log(fee2);

// &&は左側がtrueなら右側を返す。
const num3 = 100;
const fee3 = num3 && "何か設定されました。";
console.log(fee3);
