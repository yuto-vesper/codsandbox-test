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
*/

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
