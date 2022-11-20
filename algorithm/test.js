var lengthOfLongestSubstring = function(s) {
    let max = 0, obj = {}
    for(let i = 0, j = 0;i < s.length; i ++ ) {
        let word = s[i]
        if(obj[word]) {
            // 当前字符串已有
            while(j <= i) {
                if(word == s[j]) break
                delete obj[s[j]]
                j++
            }
        } else {
            obj[word] = 1
            max= Math.max(i - j + 1, max)
        }
    }

    return max
};

lengthOfLongestSubstring("abcabcbb")