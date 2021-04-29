function minAvailableDuration(slots1: number[][], slots2: number[][], duration: number): number[] {
    /*
    - take first timeslot of each
    - take the later start time of the two max(slot1,slot2) 
    - take the earlier end time of the two min(slot1,slot2)
    - Check if this potential window is duration -> return if so.
    - If not, advance the pointer with the earlier end time (other end time may overlap with another period)
    - Sort by start time
    */
    
    let p1=0;
    let p2=0;
    
    slots1.sort((a,b)=>a[0]-b[0]);
    slots2.sort((a,b)=>a[0]-b[0]);
    
    while(p1<slots1.length&&p2<slots2.length){
        const [start1, end1] =slots1[p1];
        const [start2, end2] = slots2[p2];
        

        const lateStart=Math.max(start1,start2);
        const earlyEnd=Math.min(end1,end2);
        
        if(earlyEnd-lateStart>=duration){return [lateStart,lateStart+duration];}
        
        if(earlyEnd===end1){p1++;}
        else{p2++;}
    }
    
    return [];
    
};
