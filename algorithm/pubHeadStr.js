// 字符串数组最长公共字符前缀

// 解法1 每次字母依次对比，直到某个字符串的该字母不匹配
//执行用时：68 ms 内存消耗：34.8 MB
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    if(strs.length === 1) return strs[0]
    var tempIndex = 0;

    for(let i = 0;i < strs[0].length ; i++) {
        const strSlice = strs[0][i];
        let isSame = true;
        strs.forEach(item => item[i] === strSlice ? '' : isSame = false);
        console.log(isSame, strSlice, i);
        if(!isSame) {
            tempIndex = i - 1;
            break;
        }
        tempIndex = i;
    }

    return tempIndex > -1 ? strs[0].slice(0, tempIndex + 1) : ''
};

// console.log(longestCommonPrefix(['a', 'a']));

// 解法2 两两取出公共前缀 并用前缀与数组中其他字符串找公共前缀
// 执行用时 :72 ms , 在所有 JavaScript 提交中击败了 58.89%的用户  内存消耗 :37 MB, 在所有 JavaScript 提交中击败了12.12% 的用户
function commonPrefix(strArr) {
    if(strArr.length === 0) return '';

    if(strArr.length === 1) return strArr[0];

    let temp = '';

    strArr.forEach((item, index) => {
        if(index === 0) temp = item;

        let maxStr = '';

        for(let i = 0; i < temp.length; i++) {
            if(temp.slice(0, i + 1) === item.slice(0, i + 1)) maxStr = temp.slice(0, i + 1)
            else break;
        }

        temp = maxStr;
    })

    return temp;
};

console.log(commonPrefix(['abcd', 'abc']));