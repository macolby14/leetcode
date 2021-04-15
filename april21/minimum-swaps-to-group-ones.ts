function minSwaps(data: number[]): number {
    /* 
    -group all 1's
    -look for most consecutive ones ?
    -minimum group size is # of 1's
    -find a window the size of number of 1's
    -count how many 0's -> this is number of swaps
    Runtime O(n)
    Spaace O(1)
    */
    
    const oneCt = data.reduce((tot,ind)=>tot+ind);
    
    let left=0;
    let right=0;
    let zeroes=0;
    let out=Infinity;
    
    
    while(right<data.length){
        while(right-left<oneCt){
            if(data[right]===0){zeroes++;}
            right++;
        }
        
        if(zeroes<out){out=zeroes;}
        
        if(data[left]===0){zeroes--;}
        left++;
        if(data[right]===0){zeroes++;}
        right++;
    }
    
    if(zeroes<out){out=zeroes;}
    
    
    return out;
};