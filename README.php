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
<?php
`fgrep -B 1 "= function" index.js | gsed -e "s/{/{…}/g" > README-func.txt`;
echo file_get_contents('README-func.txt');
?>
```

### NodeJS
```js
require('./m-util.js');

<?php
echo implode("\n", array_slice(explode( "\n", file_get_contents('example.js')), 2));
?>
```

### examples
```
# node example.js
<?php
`node example.js > README-result.txt`;
echo file_get_contents('README-result.txt');
?>
```


## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
