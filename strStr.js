 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    /** 先寫 hard coding 的部分，使程式碼可直接排除狀況
     *  當 needle 比 haystack 長時，直接回傳 -1
     *  當 needle 的值為 0 時，直接回傳 0
     */
    if(needle.length > haystack.length){
        return -1
    }else if(needle.length === 0){
        return 0
    }


    for(let i=0; i<haystack.length; i++){
        if(haystack.length-i < needle.length){
            break
        }
        for(let j=0; j<needle.length; j++){
            if(haystack[i+j] !== needle[j]){
                break
            }else{
                if(j === needle.length -1){
                    return i
                }
            }
        }
    }
    return -1
};


// assertion code
tests = [
	[["grace","js"], -1],
	[["noodle","dl"], 3],
	[["aaaabcbc","aa"], 0],
	[["grace","ra"], 1],
	[["",""], 0],
	[["","asf"], -1],
    [["asdfce",""], 0],
    [["iamapig","iamapighahahahahaha"], -1],
    [["iamashorthaystack","iamaveryveryverylongneedle"], -1],
    [["a", "a"], 0],
    [["mississippi","issip"], 4],
    [["abc","c"], 2],
    [["aaa", "aaa"], 0],
    [["mississippi","issi"], 1]
]

for(let i=0; i< tests.length; i++){
  const testRow = tests[i]
  const input = testRow[0]
  const exp = testRow[1]
  const [haystack, needle] = input
  const act = strStr(haystack,needle)
	if(exp!==act){
		console.log("==========")
		console.log(`Test Error at case ${i+1}`)
		console.error(`strStr("${haystack}","${needle}") get ${act}, expects ${exp}`)
		console.log("==========")
		throw new Error("Script Stops!")
	}
}

console.log("====================")
console.log("Pig loves Pig!妳是巨大好豬！")
console.log("====================")
