/**
 * @param {string} s
 * @return {number}
 */
//var firstUniqChar = function(s) {
//
//    for(let i=0; i <s.length; i++){
//        let firstPartString = s.substring(0, i)
//        let secondPartString = s.substring(i+1, s.length)
//        if(i===0){
//            firstPartString = secondPartString
//        }
//        for(let j=0; j<s.length; j++){
//            if(firstPartString[j] === s[i]){
//                break
//            }else{
//                if(secondPartString[j] === s[i]){
//                    break
//                }else{
//                    return i
//                }
//            }
//
//        }
//
//    }
//
//return -1
//
//};

var firstUniqChar = function(s) {

    // Map: holds key-value pairs and remembers the original insertion order of the keys.
    // 宣告一個變數名為 characterCounter 的變數，資料型別為函數 new Map，存取 key-value（計算字串中，同一個字母出現次數）
    let characterCounter = new Map()

    // 使用 for 迴圈依次計算、存取
    // 使用 .set(字母, 數量) ---> 設定 key-value 如何存取
    // 使用 .get() ---> 提取之前記住的 value ，往上加 1 （因為這次又出現了）
    for(let i=0; i<s.length; i++){
        characterCounter.set( s[i], (characterCounter.get(s[i]) || 0) +1)
    }
    // 使用 for 迴圈找出只出現一次的字母 ---> 使用 " .get() " ，提取 key（字母） 找出 value（次數）
    for(let i=0; i<s.length; i++){
        let value = characterCounter.get(s[i])
        if(value === 1){
        return i
        }
    }
    return-1
};

// assertion code
tests = [
	["leetcode", 0],
	["loveleetcode", 2],
	["grace", 0],
	["aabb", -1],
	["firstuniquecharacter", 0],
	["", -1],
    ["jkddfjkkeefcdcfjl", 16]
]

for(let i=0; i< tests.length; i++){
  const testRow = tests[i]
  const input = testRow[0]
  const exp = testRow[1]
  const s = input
  const act = firstUniqChar(s)
    if(exp!==act){
		console.log("==========")
		console.log(`Test Error at case ${i+1}`)
		console.error(`[${tests[i][0]}] --- get ${act}, expects ${exp}`)
		console.log("==========")
		throw new Error("Script Stops!")
	}
}

console.log("====================")
console.log("Pig loves Pig!妳是巨大好豬！")
