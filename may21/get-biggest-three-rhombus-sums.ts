function getBiggestThree(grid: number[][]): number[] {
    /*
    - Do some sort of preprocessing
    - Can get sum of upper left side by prefix sum on left to right, down to up diagnol
    - Can get sum of upper right side by prefix sum on right to left, down to up 
    - Once we have all prefix sums
    - Start 0, 0
    - Go up and right until we go out of bounds
    - move over column...
    - move down a row
    - Can get a prefix sum by going adding 4 corners (up,down, right, curr) and adding sides
    */
    const l=grid.length;
    const w=grid[0].length;
    
    const diag: number[][][]=[... new Array(4)].map(_=>[...new Array(l)].map(_=>new Array(w).fill(0)));
    const sums: number[]=[];
    
    //up right
    for(let row=0;row<l;row++){
        let sum=0;
        for(let j=0, i=row;i>=0 && j<w;j++,i--){
            sum+=grid[i][j];
            diag[0][i][j]=sum;        
        }
    }
    
    for(let col=w-1;col>=0;col--){
        let sum=0;
        for(let j=col, i=l-1;j<w && i>=0;j++,i--){
            sum+=grid[i][j];
            diag[0][i][j]=sum;        
        }
    }
    
    
    //up left
    for(let row=0;row<l;row++){
         let sum=0;
        for(let j=w-1, i=row;i>=0 && j>=0;j--,i--){
            sum+=grid[i][j];
            diag[1][i][j]=sum;        
        }
    }
    
    for(let col=0;col<w;col++){
         let sum=0;
        for(let j=col, i=l-1;i>=0 && j>=0;j--,i--){
            sum+=grid[i][j];
            diag[1][i][j]=sum;        
        }
    }
    

    //down right
    for(let row=l-1;row>=0;row--){
         let sum=0;
        for(let j=0, i=row;i<l && j<w;j++,i++){
            sum+=grid[i][j];
            diag[2][i][j]=sum;        
        }
    }
    
    for(let col=w-1;col>=0;col--){
        let sum=0;
        for(let j=col, i=0;i<l && j<w;j++,i++){
            sum+=grid[i][j];
            diag[2][i][j]=sum;        
        }
    }
    
    
    //down left
    for(let row=l-1;row>=0;row--){
         let sum=0;
        for(let j=w-1, i=row;i<l && j>=0;j--,i++){
            sum+=grid[i][j];
            diag[3][i][j]=sum;        
        }
    }
    
    
    for(let col=0;col<w;col++){
         let sum=0;
        for(let j=col, i=0;i<l && j>=0;j--,i++){
            sum+=grid[i][j];
            diag[3][i][j]=sum;        
        }
    }
    
    for(let i=0;i<l;i++){
        for(let j=0;j<w;j++){
            let sum=grid[i][j];
            sums.push(sum);
            let size=1;
            while(i-size>=0&&i+size<l&&j-size>=0&&j+size<w){
                sums.push(calculateSum(i-size,j-size,j+size,i+size,i,j));
                size++;
            }
        }
    }
    
    
    // console.log(diag);
    
    function calculateSum(top: number, left: number, right: number, bottom: number, centerRow: number, centerCol: number): number{
        let topLeft=diag[0][top][centerCol]-diag[0][centerRow][left];
        let topRight=diag[2][centerRow][right]-diag[2][top][centerCol];
        let bottomRight=diag[3][bottom][centerCol]-diag[3][centerRow][right];
        let bottomLeft=diag[1][centerRow][left]-diag[1][bottom][centerCol];
        let sum=topLeft+topRight+bottomRight+bottomLeft;
        // console.log(`i: ${centerRow} j: ${centerCol} ... ${topLeft} : ${topRight} : ${bottomRight} : ${bottomLeft} ... sum:${sum}`);
        return sum;
    }
    
    const uniqueSums=[...new Set(sums)];
    uniqueSums.sort((a,b)=>b-a);
    
    return uniqueSums.slice(0,3);
};


