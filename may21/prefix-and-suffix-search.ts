/*
class WordFilter {
    pTrie: Record<string,any>={};
    sTrie: Record<string,any>={};

    constructor(words: string[]) {
        
        for(let i=0;i<words.length;i++){
            const word = words[i];
            this.buildTrie(this.pTrie,word,i);
            
            const revWord = words[i].split('').reverse().join("");
            this.buildTrie(this.sTrie,revWord,i);
        }
        
    }

    f(prefix: string, suffix: string): number {
        const preInd=this.searchTrie(this.pTrie,prefix);
        if(preInd[0]==-1){return -1};
        const sufInd=this.searchTrie(this.sTrie,suffix.split('').reverse().join(""));
        if(sufInd[0]==-1){return -1;}
        
        let pPoint=preInd.length-1;
        let sPoint=sufInd.length-1;
        
        while(pPoint>=0&&sPoint>=0){
            if(preInd[pPoint]===sufInd[sPoint]){return preInd[pPoint];}
            if(preInd[pPoint]>sufInd[sPoint]){
                pPoint--;
            }
            else{
                sPoint--;
            }
        }
        
        return -1;
    }

    buildTrie(t: Record<string,any>, s: string, ind: number): void{
        let trie=t;
        const L=s.length;
        for(let i=0; i<L;i++){
            const c=s[i];
            if(trie[c]){
                trie[c]['words'].push(ind);
                trie=trie[c];
            }
            else{
                trie[c]={};
                trie[c]['words']=[ind];
                trie=trie[c];
            }
        }
    }

    searchTrie(t: Record<string,any>, s: string): number[]{
        let trie=t;
        for(const c of s){
            if(!trie[c]){
                return [-1];
            }
            trie=trie[c];
        }
        return trie.words;
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
