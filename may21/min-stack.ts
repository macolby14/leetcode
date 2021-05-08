class MinStack {
    /*
    -normal stack
    -all elements in the stack must know what the minimum element before them is
    -elements can only be removed from top, so elements don't need to know about elements added after them
    */
    
    st: [number, number][];
    
    constructor() {
        this.st=[];
    }

    push(val: number): void {
        const newMin = Math.min(this.getMin(),val);
        this.st.push([val,newMin]);
    }

    pop(): void {
        this.st.pop();
    }

    top(): number {
        const L=this.st.length;
        const [topVal,topMin]=this.st[L-1];
        return topVal;
    }

    getMin(): number {
        const L=this.st.length;
        
        //ensure if stack is empty, use new val as min
        if(L===0) return Infinity;
        
        const [topVal,topMin]=this.st[L-1];
        return topMin;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
