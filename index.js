module.exports = new(function() {
  String.prototype.uHereDoc = function(){
    return this.replace(/^function\s?\(\)\s?\{\/\*/gi, "").replace(/\*\/;?\}$/gi, "");
  };
  String.prototype.uAddslashes = function (s){
    var reg = new RegExp(s, 'g');
    return this.replace(reg, "\\"+ s);
  }
  String.prototype.uRepeat = function (i){
    var repeatStr = this;
    var str = "";
    while(i>0){
      str += repeatStr;
      i--;
    }
    return str;
  }
})();
