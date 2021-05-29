function maximumUniqueSubarray(nums: number[]): number {
    //Moving window
    //Start with left pointer and right pointer at 0
    //Create a map for all the current unique numbers in the array
    //While right is less than the maximum
    //If right would make the existing subarray still unique, 
        //add it
        //calculate current max 
        //compare to existing max
        //advancce right pointer
    //If right would cause duplciation, move left until you find the right, then move left one more
    //return the overall max
    
    let left=0;
    let right=0;
    let currSub=0;
    let max =0 ; //output
    const map = new Array<boolean>(10**4);
    
    while(right<nums.length){
        if(!map[nums[right]]){
            currSub+=nums[right];
            map[nums[right]]=true;
            max=Math.max(max,currSub);
            right++;
        }
        else{
            while(nums[left]!==nums[right]){
                map[nums[left]]=false;
                currSub-=nums[left];
                left++;
            }
            // this is the number we need to remove
            map[nums[left]]=false;
            currSub-=nums[left];
            left++;
        }
    }
    
    
    return max;
};


