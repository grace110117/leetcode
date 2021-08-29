/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    // 宣告 positiveNum ，使輸入的數值都轉為正數
    let positiveNum = x > 0 ? x : -x;

    // 將 positiveNum 轉為 string，以便排列重組
    let positiveNumAsStr = positiveNum.toString()

    //  宣告一個空字串，再使用 for loop 從字串最後端依序重組
    let newString = ""
    for(let i = positiveNumAsStr.length -1 ; i>=0; i--){
        newString = newString + positiveNumAsStr[i]
    }

    //  宣告最後要回傳的值result，使用 Number()，讓 string 轉回 num
    let result = x < 0 ? -Number(newString) : Number(newString)

    // 特別注意，如果最後 reverse 的值超過 “32-bit integer range” 的範圍，要回傳值 0。（這裡也就是hard code 的部分）
    if( result < Math.pow(-2, 31) || result > Math.pow(2, 31) -1 ){
        return 0
    }

    return result
};

// assertion code
tests = [
	[123, 321],
	[7890, 987],
	[885, 588],
	[7983410, 143897],
	[-123, -321],
	[-1230, -321],
    [120, 21],
    [0, 0],
]

for(let i=0; i< tests.length; i++){
  const testRow = tests[i]
  const input = testRow[0]
  const exp = testRow[1]
  const x = input
  const act = reverse(x)
    if(exp!==act){
		console.log("==========")
		console.log(`Test Error at case ${i+1}`)
		console.error(`input[${tests[i][0]}] --- get ${act}, expects ${exp}`)
		console.log("==========")
		throw new Error("Script Stops!")
	}
}

console.log("====================")
console.log("Pig loves Pig!妳是巨大好豬！")
console.log("====================")
