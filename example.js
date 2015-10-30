require('./index.js');

// Here Documents
var t = (function(){/*
<script>
$("*").css("border", "3px solid red");
</script>
*/}).toString().uHereDoc();
console.log(t);
