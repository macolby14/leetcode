class Solution {
    
    
    public boolean isPossible(int[] target) {
        if(target.length==1&&target[0]!=1){return false;}
        
        PriorityQueue<Integer> pq=new PriorityQueue<>((a,b)->b-a);
        
        long sum=0;
        for(int t: target){
            pq.offer(t);
            sum+=t;
        }
        
        
        while(pq.size()>0&&pq.peek()!=1){
            // System.out.println(sum);
            // System.out.println(pq);
            int top=pq.poll();
            sum-=top;
            
            if(top<=sum){return false;}
            if(sum==1){return true;}
            top%=sum;
   
            // System.out.println(top);
            
            if(top<1){return false;}
            
            pq.offer(top);
            sum+=top;
        }
        
        return true;
        
    }
}
