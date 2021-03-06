function StackDataStructure (size) {
    this.stackControl=[];
    this.MAX_SIZE=10;
    this.isEmpty=function(){
        return (this.stackControl.length==0)
    }
    this.canPush=function(){
        return this.stackControl.length<this.MAX_SIZE;
    }
    this.push=function(e){
        if(this.canPush()){
            this.stackControl.push(e);
            return this.stackControl
        }else return "Stack Overflow"
    }
    this.pop=function(e){
        if(!this.isEmpty()){
                    return this.stackControl.pop(e)

        }else{
            return "Stack Underflow"
        }
    }
}
