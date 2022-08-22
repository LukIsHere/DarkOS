function checkcol(x,y,w,h,sx,sy,sw,sh){
    var minAx = x
    var minAy = y
    var maxAx = x+w
    var maxAy = y+h
    var minBx = sx
    var minBy = sy
    var maxBx = sx+sw
    var maxBy = sy+sh
    
    var aLeftOfB = maxAx < minBx;
    var aRightOfB = minAx > maxBx;
    var aAboveB = minAy > maxBy;
    var aBelowB = maxAy < minBy;

    return !( aLeftOfB || aRightOfB || aAboveB || aBelowB );
}
function test(){
    windows.push(new win(600,600,true,"fb",function(x,y){//touch
        
        
    },function(key){//key
        
        if(key==" "){
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
                    this.points++
                }
            })
        }
        if(550<this.yb||this.yb<50||checkcol(this.pips[0].x-10,0,120,this.pips[0].y-50,10,this.yb-10,20,20)||checkcol(this.pips[1].x-10,0,120,this.pips[1].y-50,10,this.yb-10,20,20)||checkcol(this.pips[0].x-10,this.pips[0].y+50,120,400,10,this.yb-10,20,20)||checkcol(this.pips[1].x-10,this.pips[1].y+50,120,400,10,this.yb-10,20,20)){
            this.pause = true
            this.pips = [{x:300,y:300},{x:650,y:300}];
            this.yb = 300;
            this.v = 0;
            if(this.points>this.best){
                this.best = this.points;
            }
            this.points = 0;
        }
    },function(){//frame
        
        this.draw([["cyan"]],0,0,600,500,1)
        this.draw([["green"]],0,500,600,100,1)
        this.pips.forEach(pip => {
            this.draw([["#90EE90"]],pip.x,0,100,pip.y-50,1)
            this.draw([["#90EE90"]],pip.x-10,pip.y-70,120,20,1)
            this.draw([["#90EE90"]],pip.x,pip.y+50,100,this.w-(pip.y+50)-25,1)
            this.draw([["#90EE90"]],pip.x-10,pip.y+50,120,20,1)
        });
        this.draw([["red"]],10,this.yb-10,20,20,1);
        if(this.pause)printLine(this.best.toString(),this.x+360,this.y+30,"w",30)
        else printLine(this.points.toString(),this.x+360,this.y+30,"w",30)

    },function(){//off
        
    },function(){//init
        this.pause = true
        this.pips = [{x:300,y:300},{x:650,y:300}];
        this.yb = 300;
        this.v = 0;
        this.points = 0;
        this.best = 0;
    }))
}