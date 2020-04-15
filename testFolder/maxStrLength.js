 function maxStr(str) {
    var tempLenth = 0;
    var tempStr = '';
    var maxStr = '';
    str.split('').forEach((item, index) => {
        if(tempStr.indexOf(item) > -1) {
            tempLenth = tempLenth > tempStr.length ? tempLenth : tempStr.length;
            maxStr = tempLenth > tempStr.length ? maxStr : tempStr;

            tempStr = item;
        } else {
            tempStr += item;
        }
    });

    console.log(tempLenth, maxStr);
};

maxStr('qwertyyuiasdfghhjkzxcvbnm,')

// 返回一段字符串没有重复字符的最长子字符串