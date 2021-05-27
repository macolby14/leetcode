function minPartitions(n: string): number {
    /*
    -if numbers are ascending, is easy... just need that many numbers
    987654321 -> Just need 9 1000000+100000+10-0
    999999999 -> Just neeed 1111111111 + 1111111 etc
    
    If ascending
    321
    100
    110
    111
    
    If not ascending
    123
    001
    011
    111
    
    If in the middle
    132
    111
    011
    010
    
    Just take the highest digit
    */
    const c: number[] = n.split("").map(x=>parseInt(x,10));
    return Math.max(...c);
};
