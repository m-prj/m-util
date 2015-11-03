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
  // ヒアドキュメントサポート
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
```

### NodeJS
```js
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
```

### examples
```
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
```


## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
