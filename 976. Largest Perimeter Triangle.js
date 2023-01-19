/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let SortN =  nums.sort((a,b)=>a-b);

    for(let i = SortN.length - 3; i >= 0; i--){
        if(SortN[i] + SortN[i+1]> SortN[i+2]){
            return SortN[i] + SortN[i+1] +SortN[i+2];
        }
    }

    return 0;
};