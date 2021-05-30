class Solution {
    public int[] assignTasks(int[] servers, int[] tasks) {
        //server[int, int, int] = [weight, index, timeFree]
        
        //make all servers available, min heap by weight, then index
        Queue<int[]> availableServers = new PriorityQueue<>((a,b) -> a[0] == b[0] ? a[1]-b[1] : a[0]-b[0]);
        //keep unavailable servers sorted by availability time, then weight, then index -> may use directly from this list
        Queue<int[]> workingServers = new PriorityQueue<>((a,b) -> a[2] != b[2] ? a[2] - b[2] : a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
        
        
        int[][] serverInfo = new int[servers.length][];
        for(int i=0;i<servers.length;i++){
            serverInfo[i]=new int[]{servers[i], i, 0};
            availableServers.offer(serverInfo[i]);
        }
        
        int[] result = new int[tasks.length];

        //process tasks one by one
        for(int i=0;i<tasks.length;i++){
            int taskTime = tasks[i];
            
            //free servers based on current time
            //if a server is free and the time is >= server free time, move it to available servers
            while(workingServers.size()>0&&workingServers.peek()[2]<=i){
                availableServers.offer(workingServers.poll());
            }
            
            //  if a server is available
            //  Mark the server unavailable based on the time (task index) and the task time
            //  Mark the output array with the server's index
        
            if(availableServers.size()>0){
                int[] server = availableServers.poll();
                result[i] = server[1];
                server[2] = i + taskTime;
                workingServers.offer(server);
            }else{
                //  if a server is not available
                //  Next available server from unavailable servers
                //  Mark the output array with the server's index
                //  Mark the server unavailable based on the time the server will be free and the task time
                int[] server = workingServers.poll();
                result[i] = server[1];
                server[2] = server[2] + taskTime;
                workingServers.offer(server);
            }
        }
        
        return result;
        
        

        
       
     
    }
}
