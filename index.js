module.exports = new(function() {

    // ヒアドキュメント用
    String.prototype.uHereDoc = function() {
        return this.replace(/^function\s?\(\)\s?\{\/\*/gi, "").replace(/\*\/;?\}$/gi, "");
    };
    // スラッシュ挿入
    String.prototype.uAddslashes = function(s) {
        var reg = new RegExp(s, 'g');
        return this.replace(reg, "\\" + s);
    };
    // 文字列の繰り返し
    String.prototype.uRepeat = function(i) {
        var repeatStr = this;
        var str = "";
        while (i > 0) {
            str += repeatStr;
            i--;
        }
        return str;
    };

    // パスからファイル情報返す @return ['ファイル名','拡張子','拡張子抜きファイル名']
    String.prototype.uGetFileInfo = function() {
        var file_path = this;
        // Extract a file name with the extension.
        var name_ext = file_path.substring(file_path.lastIndexOf("/") + 1, file_path.length);
        // Extract only the extension of the file.
        var ext = name_ext.substring(name_ext.lastIndexOf(".") + 1, name_ext.length);
        // Extract only the name part of the file.
        var name = name_ext.substring(0, name_ext.indexOf("."));
        array = new Array(name_ext, ext, name);
        return array;
    };
    // パスからファイル名を返す
    String.prototype.uGetFileNameExt = function() {
        file_path = this;
        return file_path.uGetFileInfo()[0];
    };
    // パスから拡張子を返す
    String.prototype.uGetFileExt = function() {
        file_path = this;
        return file_path.uGetFileInfo()[1];
    };
    // パスから拡張子抜きファイル名を返す
    String.prototype.uGetFileName = function() {
        file_path = this;
        return file_path.uGetFileInfo()[2];
    };
    // Math.floor(x)小数点以下指定
    Math.uFloor = function(x, scale) {
        if (typeof scale !== "undefined" && scale !== null) {
            var s = Math.pow(10, scale);
            return Math.floor(x * s) / s;
        }
        return Math.floor(x);
    };
    // Math.ceil(x)小数点以下指定
    Math.uCeil = function(x, scale) {
        if (typeof scale !== "undefined" && scale !== null) {
            var s = Math.pow(10, scale);
            return Math.ceil(x * s) / s;
        }
        return Math.ceil(x);
    };
    // Math.round(x)小数点以下指定
    Math.uRound = function(x, scale) {
        if (typeof scale !== "undefined" && scale !== null) {
            var s = Math.pow(10, scale);
            return Math.round(x * s) / s;
        }
        return Math.round(x);
    };
    // 左空白詰め（右寄せ）
    uLpad = function(txt, pad) {
        var c, i, t;
        if (pad == null) {
            pad = 40;
        }
        c = " ";
        i = 0;
        t = txt;
        while (i <= pad - txt.length) {
            t = c + t;
            i++;
        }
        return t;
    };
    // 右空白詰め（左寄せ）
    uRpad = function(txt, pad) {
        var c, i, t;
        if (pad == null) {
            pad = 40;
        }
        c = " ";
        i = 0;
        t = txt;
        while (i <= pad - txt.length) {
            t += c;
            i++;
        }
        return t;
    };
    escapeHtml = (function(String) {
        var escapeMap = {
            '&': '&amp;',
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        var escapeReg = '[';
        var reg;
        for (var p in escapeMap) {
            if (escapeMap.hasOwnProperty(p)) {
                escapeReg += p;
            }
        }
        escapeReg += ']';
        reg = new RegExp(escapeReg, 'g');

        return function escapeHtml(str) {
            str = (str === null || str === undefined) ? '' : '' + str;
            return str.replace(reg, function(match) {
                return escapeMap[match];
            });
        };
    }(String));
})();
