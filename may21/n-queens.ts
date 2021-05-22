function solveNQueens(n: number): string[][] {
    const solutions: string[][]=[];
    
    const grid = createEmptyGrid(n);
    recurse(n,grid,0,solutions);
    return solutions;
        
};

function recurse(n: number, grid: number[][], row: number, solutions: string[][]){
    if(n===0){
        solutions.push(copyAndFormat(grid));
        return;
    }
        for(let j=0;j<grid.length;j++){
            if(grid[row][j]===0){
                addQueen(grid,row,j);
                // console.log('After adding queen');
                // console.log(grid);
                recurse(n-1,grid,row+1,solutions);
                removeQueen(grid,row,j);
            }
        }
}

function addQueen(grid: number[][],row: number, col: number): void{
    grid[row][col]=-1;
    
    const n=grid.length;
    let diagnols = [[1,1],[1,-1],[-1,-1],[-1,1],[0,1],[0,-1],[-1,0],[1,0]];
    for(const diag of diagnols){
        let r=row+diag[0];
        let c=col+diag[1];
        while(r>=0&&c>=0&&r<n&&c<n){
            grid[r][c]++;
            r+=diag[0];
            c+=diag[1];
        }
    }
}

function removeQueen(grid: number[][], row: number, col: number): void{
    
    grid[row][col]=0;
    
    const n=grid.length;
    let diagnols = [[1,1],[1,-1],[-1,-1],[-1,1],[0,1],[0,-1],[-1,0],[1,0]];
    for(const diag of diagnols){
        let r=row+diag[0];
        let c=col+diag[1];
        while(r>=0&&c>=0&&r<n&&c<n){
            grid[r][c]--;
            r+=diag[0];
            c+=diag[1];
        }
    }
}

function createEmptyGrid(n: number): number[][]{
    return [...new Array(n)].map(_=>new Array(n).fill(0));
}

function copyAndFormat(grid: number[][]): string[]{
    const strGrid = [...new Array(grid.length)].map(_=>new Array(grid.length).fill(''));
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===-1){strGrid[i][j]='Q';}
            else{strGrid[i][j]='.';}
        }
    }
    const outGrid=strGrid.map((row)=>row.join(''));
    return outGrid;
}
