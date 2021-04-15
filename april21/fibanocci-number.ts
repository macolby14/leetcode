function fib(n: number): number {
    if(n===0||n===1){return n;}
    
    
    let twoBack=0;
    let oneBack=1;
    
    let ind=2;
    while(ind<=n){
        const res=twoBack+oneBack;
        twoBack=oneBack;
        oneBack=res;
        ind++;
    }
    return oneBack;
};