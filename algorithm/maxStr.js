/*
 * @Author: zhaoqian.tang
 * @Date: 2021-03-28 11:14:58
 * @LastEditTime: 2021-03-28 11:24:45
 * @LastEditors: your name
 * @Description: 
 */


var lengthOfLongestSubstring = function(s) {
    let left = -1, right, maxCount = 0
    const map = new Map()
    for(right = 0; right < s.length;right++) {
        const charater = s[right]
        console.log('charater', charater)

        if(map.has(charater)) {
            console.log(123)
            // 本字符会重复，左指针往右直到没有重复
            while(left < right && s[left] != charater) {
                const leftCharater = s[left]
                map.delete(leftCharater)
                left ++ 
            } 
        }
            
        // 不重复则往map加当前字段和计算max
        map.set(charater, 1)
        console.log(map)
        const diff = right - left
        if(diff > maxCount) maxCount = diff
        
    }
    console.log(maxCount)
    return maxCount
};

lengthOfLongestSubstring('abcaer')