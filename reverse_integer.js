/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    // 宣告 input ，使得轉換過程中不需要頻繁用到 x 值
    let input = x

    // 當 input 為負數時，先將它轉為正數（使用絕對值）
    if( x<0 ){
        input = Math.abs(x)
    }

    // 將 input 屬性轉為字串性質，以便重新排列，同時設定一個空陣列，將重新排列的內容依序安排進這個陣列
    let y = input.toString()
    let reverseInt = []

    // 在 for 迴圈裡，使用 unshift，將字放進空陣列（每次都將新物件加入在第一個物件位置） --- 這裡要注意是字串的屬性
    for(let i=0; i< y.length; i++){
        reverseInt.unshift(y[i])
    }

    //  宣告一個空字串，這個空字串是要將字串中的物件個體，組合成一個完整的字串，故使用 for 迴圈依序加進空字串中
    let newString = ""
    for(let i=0; i<reverseInt.length; i++){
        newString = newString + reverseInt[i]
    }

    //  使用 Number()，讓 string 轉回 num
    let result = Number(newString)

    //  最後要注意，負數值要再轉回負數
    if(x<0){
        result = -Math.abs(result)
    }

    // 特別注意，如果最後 reverse 的值超過 “32-bit integer range” 的範圍，要回傳值 0。（這裡也就是hard code 的部分）
    if( result < Math.pow(-2, 31) || result > Math.pow(2, 31)-1 ){
        return 0
    }

    return result
};

//  let x = 123
//  console.log((123).toString())
//console.log(Math.pow(-2, 31), Math.pow(2, 31)-1)
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
