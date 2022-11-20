 function maxStr(str) {
    var tempStr = '';
    var maxStr = '';
    str.split('').forEach((item, index) => {
        if(tempStr.indexOf(item) > -1) {
            maxStr = maxStr.length > tempStr.length ? maxStr : tempStr;

            tempStr = item;
        } else if(index === str.length - 1) {
            tempStr += item
            maxStr = maxStr.length > tempStr.length ? maxStr : tempStr;
        } else {
            tempStr += item;
        }
    });

    console.log(maxStr.length, maxStr);
};

maxStr('qwertyyuiasdfghhjkzxcvbnm,')

// 返回一段字符串没有重复字符的最长子字符串