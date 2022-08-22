

var screenw = document.getElementById("s")
var ctx = screenw.getContext("2d");
var w = "w";
var t = "t";//przezroczysty
var b = "b";
var g = "g";
var cx=0;
var cy=0
var scr = "loading";
var windows =  [];
var bSpace = true;
var second = 1000;
var minute = 60*second;
var loadp = 0;
var asset = [];
var lastl = "";
var todo = 0;
var done = 0;
var mbtnDown = false;
var debug = false;
var lastkey = "";
var focusw = 0;
function style(s){
    switch (s){
        case "b":
            ctx.fillStyle = "black"
        break;
        case "w":
            ctx.fillStyle = "white"
        break;
        case "g":
            ctx.fillStyle = "green"
        break;
        default:
            ctx.fillStyle = s;
    }
}
function draw(obj,xs,ys,dx,dy,size){
    var sx = dx/size;
    var sy = dy/size;
    for(var ix = 0;ix<size;ix++){
        for(var iy = 0;iy<size;iy++){
            style(obj[ix][iy]);
            if(obj[ix][iy]!=t)ctx.fillRect(ys+(sy*iy),xs+(sx*ix),sx,sy);
        }
    }
}
function rotateL(obj){
    return obj;
}
function rotateR(objs){
    return obj;
}
function drawCenter(obj,ys,dx,dy,size){
    var sx = dx/size;
    var sy = dy/size;
    for(var ix = 0;ix<size;ix++){
        for(var iy = 0;iy<size;iy++){
            style(obj[ix][iy]);
            if(obj[ix][iy]!=t)ctx.fillRect((1440-dx)/2+(sx*ix),ys+(sy*iy),sx,sy);
        }
    }
}
function letter(l,xs,ys,c="w",dx=100,dy=100){
    switch (l.toLowerCase()){
        case "a":
            draw([[t,t,c,t,t],[t,c,t,c,t],[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "b":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "c":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "d":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,t,t,c,t],[c,t,t,c,t],[c,c,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "e":
            draw([[c,c,c,c,t],[c,t,t,t,t],[c,c,c,t,t],[c,t,t,t,t],[c,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "f":
            draw([[c,c,c,c,t],[c,t,t,t,t],[c,c,c,t,t],[c,t,t,t,t],[c,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "g":
            draw([[t,c,c,c,t],[c,t,t,t,t],[c,t,t,c,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "h":
            draw([[c,t,t,t,c],[c,t,t,t,c],[c,c,c,c,c],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "i":
            draw([[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "j":
            draw([[t,t,t,c,t],[t,t,t,c,t],[t,t,t,c,t],[t,c,t,c,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "k":
            draw([[t,c,t,t,c],[t,c,t,c,t],[t,c,c,t,t],[t,c,t,c,t],[t,c,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "l":
            draw([[t,c,t,t,t],[t,c,t,t,t],[t,c,t,t,t],[t,c,t,t,t],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "m":
            draw([[c,t,t,t,c],[c,c,t,c,c],[c,t,c,t,c],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "n":
            draw([[c,t,t,t,c],[c,c,t,t,c],[c,t,c,t,c],[c,t,t,c,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "o":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "p":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,t,t],[c,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "r":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,c,t],[c,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "s":
            draw([[t,c,c,c,t],[c,t,t,t,t],[t,c,c,c,t],[t,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "t":
            draw([[c,c,c,c,c],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "u":
            draw([[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "w":
            draw([[c,t,t,t,c],[c,t,t,t,c],[t,c,t,c,t],[t,c,c,c,t],[t,c,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "y":
            draw([[c,t,t,t,c],[t,c,t,c,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "z":
            draw([[c,c,c,c,c],[t,t,t,c,t],[t,t,c,t,t],[t,c,t,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "x":
            draw([[c,t,t,t,c],[t,c,t,c,t],[t,t,c,t,t],[t,c,t,c,t],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case ".":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case ",":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case ":":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t],[t,t,t,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "-":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,c,c,c,t],[t,t,t,t,t],[t,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "_":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "/":
            draw([[t,t,t,c,t],[t,t,t,c,t],[t,t,c,t,t],[t,c,t,t,t],[t,c,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "(":
            draw([[t,t,t,c,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case ")":
            draw([[t,c,t,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,c,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "1":
            draw([[t,t,c,t,t],[t,c,c,t,t],[c,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "2":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,t,t,c,t],[t,t,c,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "3":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,t,t,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "4":
            draw([[t,t,t,c,t],[t,t,c,c,t],[t,c,t,c,t],[c,c,c,c,c],[t,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "5":
            draw([[c,c,c,c,c],[c,t,t,t,t],[c,c,c,c,t],[t,t,t,t,c],[c,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "6":
            draw([[t,c,c,c,c],[c,t,t,t,t],[c,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "7":
            draw([[c,c,c,c,c],[t,t,t,c,t],[t,t,t,c,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "8":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "9":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,c],[t,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "0":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
    }
}
function printLine(text,xs,ys,c="w",fsize = 50){
    var sindex = 0;
    for(var i = 0;i<text.length;i++){
        if(text.charAt(i)==" ")sindex +=fsize/2
        letter(text.charAt(i),ys,xs+((fsize+fsize/10)*i-sindex),c,fsize,fsize)
    }
}
function printLineCenter(text,ys,c="w",fsize = 50){
    var sindex = 0;
    var sindexb = 0;
    for(var i = 0;i<text.length;i++){
        if(text.charAt(i)==" ")sindex +=fsize/2
    }
    for(var i = 0;i<text.length;i++){
        if(text.charAt(i)==" ")sindexb +=fsize/2
        letter(text.charAt(i),ys,(1440-((fsize+fsize/10)*text.length-sindex))/2+((fsize+fsize/10)*i-sindexb),c,fsize,fsize)
    }
}
function fill(col){
    style(col);
    ctx.fillRect(0,0,screenw.width,screenw.height);
}
function drawBar(proc,wi,hi,y,c=w){
    style("w");
    ctx.fillRect((1440-wi)/2,y,wi*proc,hi)
}
function desktop(){
    style("#565656")
    ctx.fillRect(0,0,1440,1440)
    style("#454545")
    ctx.fillRect(0,1440,1440,160);
}
function start(){

}
function click(){
    function chceckb(x,y,w,h){
        return (cx>=x&&cx<=x+w&&cy>=y&&cy<=y+h);
    }
    //window click
    windows.forEach((w,i)=>{
        try{
            
            if(w.f){
                if(chceckb(w.x+10,w.y+30,w.w,w.h)){
                    w.touch(cx+w.x+10,cy+w.y+30);
                    focusw = i;
                }
                if(chceckb(w.x,w.y,w.w+20,30)){
                    w.frameclick()
                    if(chceckb(w.x+w.w-10,w.y+5,20,20))windows[i]=undefined;
                    return;
                }
            }
        }catch{

        }
    })
    //system click
    if(chceckb(0,1440,160,160))windows.push(new win(1000,1000,true,"nazwa",function(){},function(){},function(){},function(){},function(){}));

}

var loading = [["w","b","b"],["w","b","w"],["w","w","w"]];
var loadingb = "hi";
var lstate = 0;
function frame(){
    switch (scr){
        case "loading":
            fill("b");
            printLineCenter(loadingb,1200,"g")
            printLineCenter("dark os",400,"w",150)
            printLineCenter(done+" z "+todo,1300,"w",50)
            printLineCenter(lastl,1400,"w",50)
            drawCenter(loading,840,240,240,3)
            //drawBar(loadp/20,1300,50,1300)
        break;
        case "desktop":
            desktop();
            ctx.drawImage(asset["darkOS"],0,1440)
            windows.forEach((w)=>{
                try{
                    w.root();
                }catch{

                }
            })
            
        break;
        default:
            fill("blue");
            printLineCenter("error :(",400,"w",100)

    }
    if(debug){
        printLine("mysz "+cx+":"+cy+" "+mbtnDown,0,0,w,10)
        printLine("okno  "+screenw.width+":"+screenw.height,0,12,w,10)
        printLine("ostatni klawisz "+lastkey,0,24,w,10)
        
    }
    
}
class win{
    constructor(h,w,frame,name,touch,key,tick,framef,off,init=function(){}){
        this.bg = "white";
        this.x = 0;
        this.y = 0;
        this.h = h;
        this.w = w;
        this.f = frame;
        this.tick = tick;
        this.touch = touch;
        this.frame = framef;
        this.name = name
        this.ClickOnFrame = false;
        this.data = {

        }
        this.close = false;
        this.off = off;
        this.key = key;
        this.init = init;
        this.init()
    }
    init(){

    }
    touch(x,y){

    }
    key(key){

    }
    tick(){

    }
    frame(){

    }
    off(){

    }
    frameclick(){
        this.omx = cx
        this.omy = cy
        this.ox = this.x
        this.oy = this.y
        this.ClickOnFrame = true
    }
    root(){
        try{
            if(this.ClickOnFrame){
                this.x = cx-this.omx+this.ox;
                this.y = cy-this.omy+this.oy;
            }
            if(!mbtnDown&&this.ClickOnFrame){
                this.ClickOnFrame=false
            }
            //draw frame
            if(this.f){
                //up 30 rest 10
                style("gray");
                ctx.fillRect(this.x,this.y,this.w+20,this.h+40)
                style(this.bg);
                ctx.fillRect(this.x+10,this.y+30,this.w,this.h)
                printLine(this.name,this.x+5,this.y+5,"white",20)
                letter("x",this.y+5,this.x+this.w-10,"w",20,20)
                
            }
            
            this.tick()
            this.frame()
        }catch(wut){
            console.log(wut);
        }
        
    }
    draw(obj,xs,ys,dx,dy,size){
        var txs = xs;
        var tys = ys;
        var tdx = dx;
        var tdy = dy;
        if(txs<0){
            tdx +=txs;
            txs=0;
        }
        if(tys<0){
            tyx +=tys;
            tys=0;
        }
        if(txs>this.w){
            txs=this.w;
            tdx=0
        }
        if(tys>this.w){
            tys=this.h;
            tdy=0
        }
        if(txs+tdx>this.w){
            tdx=this.w-txs
        }
        if(tys+tdy>this.h){
            tdy=this.h-tys
        }
        draw(obj,tys+this.y+30,txs+this.x+10,tdx,tdy,size);
    }
    letter(l,xs,ys,c="w",dx=100,dy=100){
        
        letter(l,ys+this.y+30,xs+this.x+10,c,dx,dy)
        console.log("gut")
    }
    drawSprite(img,x,y,w,h){
        ctx.drawImage(img,x,y,w,h);
    }
    kill(){
        this.close = true
    }
}
function  tick(){
    switch (lstate){
        case 0:
            loading = [["w","b","b"],["w","b","w"],["w","w","w"]]
            lstate = 1
        break;
        case 1:
            loading = [["w","w","b"],["w","b","b"],["w","w","w"]]
            lstate = 2
        break;
        case 2:
            loading = [["w","w","w"],["w","b","b"],["w","w","b"]]
            lstate = 3
        break;
        case 3:
            loading = [["w","w","w"],["w","b","w"],["w","b","b"]]
            lstate = 4
        break;
        case 4:
            loading = [["w","w","w"],["w","b","w"],["b","b","w"]]
            lstate = 5
        break;
        case 5:
            loading = [["w","w","w"],["b","b","w"],["b","w","w"]]
            lstate = 6
        break;
        case 6:
            loading = [["b","w","w"],["b","b","w"],["w","w","w"]]
            lstate = 7
        break;
        case 7:
            loading = [["b","b","w"],["w","b","w"],["w","w","w"]]
            lstate = 0
        break;
    }
}
function slowtick(){
    bSpace = !bSpace
    switch (loadingb){
        case "wczytywanie ...":
        loadingb = "wczytywanie .";
        break;
        case "wczytywanie .":
        loadingb = "wczytywanie ..";
        break;
        case "wczytywanie ..":
        loadingb = "wczytywanie ...";
        break;
        default:
        loadingb = "wczytywanie .";
    }
    
}
//wczytywanie assetów
var ass =  [
    "bin",
    "darkOS",
    "mc"
]
ass.forEach(a=>{
    var ur = "./assets/"+a+".png"
    var img = new Image;
    img.src =  ur;
    todo++

    img.onload = function(){
        lastl = a+".png";
        done++
        if(done==todo)start();
        asset[a] = img;
    }
})

setInterval(frame,33.4)
setInterval(tick,60)
setInterval(slowtick,1000)
setInterval(()=>{
    if(loadp<=20)loadp+=0.4;
},100)
setTimeout(()=>{
    scr = "desktop"
    test();
    setTimeout(()=>{
        //scr = "error"
    },second*20)
},second*0.5)
//fake wczytywanie
todo++
setTimeout(() => {
    done++
    lastl = "system32"
}, second*1);
todo++
setTimeout(() => {
    done++
    lastl = "desktop.bat"
}, second*2);
todo++
setTimeout(() => {
    done++
    lastl = "sys.reg"
}, second*4);
//touch
function forCanv(x,y){
    const rect = screenw.getBoundingClientRect();
    const elementRelativeX = x - rect.left;
    const elementRelativeY = y - rect.top;
    const canvasRelativeX = elementRelativeX * screenw.width / rect.width;
    const canvasRelativeY = elementRelativeY * screenw.height / rect.height;
    
    return {x:Math.round(canvasRelativeX),y:Math.round(canvasRelativeY)}
}
screenw.addEventListener("mousedown",(e)=>{
    var pos = forCanv(e.clientX,e.clientY);
    cx = pos.x;
    cy = pos.y;
    mbtnDown = true;
    click(pos.x,pos.y)
})
screenw.addEventListener("mousemove",(e)=>{
    var pos = forCanv(e.clientX,e.clientY);
    cx = pos.x;
    cy = pos.y;
})
screenw.addEventListener("mouseup",(e)=>{
    var pos = forCanv(e.clientX,e.clientY);
    cx = pos.x;
    cy = pos.y;
    mbtnDown = false;
})
document.addEventListener("keydown",(ev)=>{
    lastkey = ev.key
    windows[focusw].key(ev.key);
    if(ev.key.toLowerCase()=="t")test()
    ev.preventDefault();
})
//export
//later