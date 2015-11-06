# m-util
[![npm total download](https://img.shields.io/npm/dt/m-util.svg?style=flat)](https://www.npmjs.com/package/m-util)
[![npm version](https://badge.fury.io/js/m-util.svg?style=flat)](https://badge.fury.io/js/m-util)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://ruedap.mit-license.org/2015)

## インストール - Install
```
$ npm i -S m-util
```

## 使い方 - Usage

### Functions
```
  // ヒアドキュメント用
  String.prototype.uHereDoc = function() {…}
--
  // スラッシュ挿入
  String.prototype.uAddslashes = function(s) {…}
--
    // 文字列の繰り返し
  String.prototype.uRepeat = function(i) {…}
--
  // パスからファイル情報返す @return ['ファイル名','拡張子','拡張子抜きファイル名']
  String.prototype.uGetFileInfo = function() {…}
--
    // パスからファイル名を返す
  String.prototype.uGetFileNameExt = function() {…}
--
    // パスから拡張子を返す
  String.prototype.uGetFileExt = function() {…}
--
    // パスから拡張子抜きファイル名を返す
  String.prototype.uGetFileName = function() {…}
--
    // Math.floor(x)小数点以下指定
  Math.uFloor = function(x, scale) {…}
--
    // Math.ceil(x)小数点以下指定
  Math.uCeil = function(x, scale) {…}
--
    // Math.round(x)小数点以下指定
  Math.uRound = function(x, scale) {…}
```

### NodeJS
<table>
<tr>
  <th><h3>Code</h3></th>
  <th><h3>Result</h3></th>
</tr>
<tr>
  <td>
  <pre class="rich-diff-level-zero">
require('./m-util.js');
// Here Documents
var t = (function(){/*
<script>
$("*").css("border", "3px solid red");
</script>
*/}).toString().uHereDoc();
console.log(t);

var path = 'test.png';
console.log(path.uGetFileInfo());
console.log(path.uGetFileNameExt());
console.log(path.uGetFileExt());
console.log(path.uGetFileName());
console.log(path);


var path2 = '/Users/mac/Documents/vhosts/m-util/index.js';
console.log(path2.uGetFileInfo());
console.log(path2.uGetFileNameExt());
console.log(path2.uGetFileExt());
console.log(path2.uGetFileName());
console.log(path2);

console.log(Math.uFloor(124.456, 1));
console.log(Math.uCeil(124.456, 1));
console.log(Math.uRound(124.454, 1));
console.log(Math.uRound(124.455, 1));

console.log(Math.uFloor(232.456, 2));
console.log(Math.uCeil(232.456, 2));
console.log(Math.uRound(232.454, 2));
console.log(Math.uRound(232.455, 2));
  </pre>
  </td>
  <td>
  <pre class="rich-diff-level-zero">
# node example.js

<script>
$("*").css("border", "3px solid red");
</script>

[ 'test.png', 'png', 'test' ]
test.png
png
test
test.png
[ 'index.js', 'js', 'index' ]
index.js
js
index
/Users/mac/Documents/vhosts/m-util/index.js
124.4
124.5
124.5
124.5
232.45
232.46
232.45
232.46
  </pre>
  </td>
</tr>
</table>

## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
