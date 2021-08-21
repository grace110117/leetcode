/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    //先檢查全部陣列中的第一個字母，確認是否能歸類Prefix，若無法歸類，則直接回傳空字串。
    for(let i=0; i<strs.length-1; i++){
        if(strs[i][0] !== strs[i+1][0]){
            return ""
        }
    }

    //先宣告 pointer A，起始數值為陣列中第一個字串，其中，pointer 代表的意義是要比對的值的位置（也就是要比對的字串）。
    //使用 let 宣告，因為之後的值會被重新取代
    let currentPrefix = strs[0]

    //第一層 for 迴圈中 i 的意義為，陣列中字串的位置。
    for(let i=0; i<strs.length-1; i++){
        //宣告 pointer B 為，要比對的字串位置。
        let strToCompare = strs[i+1]

        //第二層 for 迴圈中 j 的意義為，字串中字母的位置。
        //注意！ j 迴圈的執行範圍為 <= ，因為當 ptrB 整組都是 prefix 時，只寫小於將不會執行最後一次的迭代（因為沒有執行到ptrA不等於ptrB）
        for(let j=0; j<=strToCompare.length; j++){
            if(currentPrefix[j] !== strToCompare[j]){
                currentPrefix = strToCompare.substring(0, j)
                break
            }
        }
    }
    return currentPrefix
};




// assertion code
tests = [
	[["flower","flow","flight"], "fl"],
	[["noodle","dl","need"], ""],
	[["aaaabcbc","vkw"], ""],
	[["think","thin","thick","thirsty"],"thi"],
	[["break","broke","brought"], "br"],
	[["",""], ""],
    [["brjklddfjkwkefcfjo","brjkld"], "brjkld"],
    [["pink","piggy","peter","dog"], ""],
    [["hunter","imitation","butter","taiwan"], ""]
]

for(let i=0; i< tests.length; i++){
  const testRow = tests[i]
  const input = testRow[0]
  const exp = testRow[1]
  const strs = input
  const act = longestCommonPrefix(strs)
    if(exp!==act){
		console.log("==========")
		console.log(`Test Error at case ${i+1}`)
		console.error(`strs[${tests[i][0]}] --- get ${act}, expects ${exp}`)
		console.log("==========")
		throw new Error("Script Stops!")
	}
}

console.log("====================")
console.log("Pig loves Pig!妳是巨大好豬！")
console.log("====================")