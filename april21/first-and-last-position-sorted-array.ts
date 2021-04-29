function searchRange(nums: number[], target: number): number[] {
    /*
        - Binary search will return the number, need the range
        - Two binary searches, one that will search high if the number is found, this should give you end index
        - One returns low if the number is found
    */
    
    */

    let lo=0;
    let hi=nums.length;
    while(hi>lo){
        let mid = Math.floor((lo+hi)/2); // mid = floor((lo+hi)/2), val = nums[mid]
        let val = nums[mid];
        if(val>=target){hi=mid;}     // search low
        else{lo=mid+1;} //search hi        
    }

    // when searching low for target, lo=hi=start of range - 1
    const startRange = lo;
    

    lo=0;
    hi=nums.length;
    
    while(hi>lo){
        let mid = Math.floor((lo+hi)/2); // mid = floor((lo+hi)/2), val = nums[mid]
        let val = nums[mid];
        if(val>target){hi=mid;}     // search low
        else{lo=mid+1;} //search hi        
    }
    
    // when searching high for target, lo=hi=end of range + 1
    const endRange = lo-1;
    
    // if startRange = endRange and not equalt to target, no range
    // if startRange = endRange and equal to target, only 1 instance
    
    if(startRange>endRange){
        return [-1, -1];
    }
 
    return [startRange, endRange];
}