class Solution {
    public boolean halvesAreAlike(String s) {
        /*
        -Split string in half (string is even)
        -Count vowels
        */
        
        int l = s.length();
        String leftS = s.substring(0,l/2);
        String rightS = s.substring(l/2);
        if(countVowels(leftS)==countVowels(rightS)){return true;}
        
        return false;
    }
    
    public int countVowels(String s){
        int ct=0;
        for(int i=0;i<s.length();i++){
            char c = Character.toLowerCase(s.charAt(i));
            
            switch(c){
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u': ct++;
                default:
            }
        }
        
        return ct;
    }
}