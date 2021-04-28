/* DP 
- Paths to first square is 1
- Paths to first row and first col is 1
- Paths to a given square is how many paths above it and to left of it
*/

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;

    const dp: number[][] = new Array(M).fill(0).map(() => new Array(N).fill(0));


    if (obstacleGrid[0][0] === 1) { return 0; }
    dp[0][0] = 1;

    for (let i = 1; i < N; i++) {
        dp[0][i] = dp[0][i - 1];
        if (obstacleGrid[0][i] === 1) { dp[0][i] = 0; }
    }

    for (let i = 1; i < M; i++) {
        dp[i][0] = dp[i - 1][0];
        if (obstacleGrid[i][0] === 1) { dp[i][0] = 0; }
    }


    for (let i = 1; i < M; i++) {
        for (let j = 1; j < N; j++) {
            if (obstacleGrid[i][j] === 1) { dp[i][j] = 0; }
            else { dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; }
        }
    }


    return dp[M - 1][N - 1];
};



// /* Recurisve Approach with memoization
//  - Depth first search to try all paths (only going down or right)
//  - Don't have to worry about looping because cannot go back
//  - If a path reaches the end, return 1
//  - If a path dead ends, return 0
//  - If a path does not reach the end, return the sum of all the paths that lead up to it

//  - Can memoize the results
//  - When returning the results for a square, save it in a cache to prevent a dfs if reaching this grid again
// */


// function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

//     const cache: number[][]=[];
//     return dfs(0,0);

//     function dfs(row: number, col: number){
//         if(row<0||col<0||row>=obstacleGrid.length||col>=obstacleGrid[row].length){return 0;}
//         if(obstacleGrid[row][col]===1){return 0;}
//         if(row===obstacleGrid.length-1&&col===obstacleGrid[row].length-1){return 1;}
//         if(cache[row]&&cache[row][col]){return cache[row][col];}

//         let sumPaths=0;
//         sumPaths+=dfs(row+1,col); // down
//         sumPaths+=dfs(row,col+1); // right

//         if(!cache[row]){cache[row]=[];}
//         cache[row][col]=sumPaths;


//         return sumPaths;
//     }

// };