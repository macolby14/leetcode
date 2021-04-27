class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        /*
            Use a min-heap (priority queue) to keep track of ladders used
            Use all of your ladders and track the dHeight used for them with 
            When we get to a new tower, check the newDHeight vs min of pq
            If the newDHeight is more, use a ladder on it instead
            If the newDHeight is less, use up bricks
            
            Runtime is nlog(n)
            -n to go through each element
            -log(n) to potentially add every element to the pq
        */
        PriorityQueue<Integer> pq =new PriorityQueue<>();
        int ind=0;
        while(ind+1<heights.length){
            int diff=heights[ind+1]-heights[ind];
            if(diff<=0){//going to a shorter building
            }
            else{
                if(ladders>0){
                    ladders--;
                    pq.add(diff);
                }else{
                    if(pq.size()>0&&pq.peek()<diff){ //should use a ladder for this pos instead
                        int old=pq.poll();
                        if(bricks<old){return ind;}//we could not of used bricks for the old pos
                        bricks-=old;
                        pq.add(diff);
                    }else{
                        if(bricks<diff){return ind;}// out of bricks
                        bricks-=diff;
                    }
                }
            }
            ind++; //always move on
        }
        return ind;
    }
}
