# m-util
[![npm total download](https://img.shields.io/npm/dt/m-util.svg?style=flat)](https://www.npmjs.com/package/m-util)
[![npm version](https://badge.fury.io/js/m-util.svg?style=flat)](https://badge.fury.io/js/m-util)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://ruedap.mit-license.org/2015)

## インストール - Install
```
$ npm i -S m-util
```

## 使い方 - Usage

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
```

### examples
```
# node example.js

<script>
$("*").css("border", "3px solid red");
</script>

```


## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
