/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
    let n = 1 << 16; // 65536
    let dp = create(n)
    
    // set end bit to 1
    dp[n - 1] = 1;
    
    // just compare 3 times
    let i = 3;

    while (i--) {
        // set template for calculate
        const t = create(n)

        // set value if not 0
        for (let k = 0; k < n; k++) {
            for (let a of nums) {
                t[k & a] += dp[k];
            }
        }

        // assign to dp
        dp = t;
    }

    // return first of dp
    return dp.shift();

    // create array as filling
    function create(n) {
        return new Array(n).fill(0)
    }
};