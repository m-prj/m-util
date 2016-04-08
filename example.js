require('./index.js');

var hr = "_".uRepeat(20);

// Here Documents
var t = (function() {/*
  &lt;script&gt;
  $(&quot;*&quot;).css(&quot;border&quot;, &quot;3px solid red&quot;);
  &lt;/script&gt;
  */}).toString().uHereDoc();
console.log(t);
console.log(hr);

var path = 'test.png';
console.log(path.uGetFileInfo());
console.log(path.uGetFileNameExt());
console.log(path.uGetFileExt());
console.log(path.uGetFileName());
console.log(path);
console.log(hr);

var path2 = '/Users/mac/Documents/vhosts/m-util/index.js';
console.log(path2.uGetFileInfo());
console.log(path2.uGetFileNameExt());
console.log(path2.uGetFileExt());
console.log(path2.uGetFileName());
console.log(path2);
console.log(hr);

console.log(Math.uFloor(124.456, 1));
console.log(Math.uCeil(124.456, 1));
console.log(Math.uRound(124.454, 1));
console.log(Math.uRound(124.455, 1));
console.log(hr);

console.log(Math.uFloor(232.456, 2));
console.log(Math.uCeil(232.456, 2));
console.log(Math.uRound(232.454, 2));
console.log(Math.uRound(232.455, 2));
console.log(hr);

console.log('[' +uRpad("hoge") + ']');
console.log('[' +uLpad("hoge") + ']');
console.log(hr);

console.log('[' +uRpad("fuga", 10) + ']');
console.log('[' +uLpad("fuga", 10) + ']');
console.log(hr);

console.log('[' +escapeHtml('<>`"') + ']');
console.log(hr);
