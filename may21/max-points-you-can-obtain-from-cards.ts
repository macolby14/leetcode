function maxScore(cardPoints: number[], k: number): number {
    
    let len=cardPoints.length;
    let cardsKept=len-k;
    let left=0;
    
    
    const totalSum=cardPoints.reduce((sum,ind)=>sum+ind);
    
    let sum=0;
    for(let i=left;i<left+cardsKept;i++){
        sum+=cardPoints[i];
    }
    
    let minSum=sum;
    while(left+cardsKept<cardPoints.length){
        sum-=cardPoints[left];
        sum+=cardPoints[left+cardsKept];
        left++;
        minSum=Math.min(minSum,sum);
    }
    
    return totalSum-minSum;
    
};
