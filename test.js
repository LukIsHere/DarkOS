function test(){
    windows.push(new win(600,600,true,"fb",function(x,y){//touch
        
        
    },function(key){//key
        
        if(key==" "){
            console.log("unpause");
            this.pause = false
            this.v = 10
        }
    },function(){//tick
        if(!this.pause){
            this.v-=1;
            this.yb-=this.v;
            this.pips.forEach((pip,i)=>{
                pip.x-=5;
                if(pip.x<-100){
                    this.pips[i].x=600;
                    this.pips[i].y=(Math.random()*400)+100
                }
            })
        }
    },function(){//frame
        
        this.draw([["cyan"]],0,0,600,500,1)
        this.draw([["green"]],0,500,600,100,1)
        this.pips.forEach(pip => {
            this.draw([["#90EE90"]],pip.x,0,100,pip.y-50,1)
            this.draw([["#90EE90"]],pip.x-10,pip.y-70,120,20,1)
            this.draw([["#90EE90"]],pip.x,pip.y+50,100,this.w-(pip.y+50)-75,1)
            this.draw([["#90EE90"]],pip.x-10,pip.y+50,120,20,1)
        });
        this.draw([["red"]],10,this.yb-10,20,20,1);
        printLine(this.v.toString(),1000,1000,"w",100)

    },function(){//off
        
    },function(){//init
        this.pause = true
        this.pips = [{x:300,y:300},{x:650,y:300}];
        this.yb = 300;
        this.v = 0;
    }))
}