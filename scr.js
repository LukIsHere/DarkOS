var screen = document.getElementById("s")
var ctx = screen.getContext("2d");
var w = "w";
var t = "t";//przezroczysty
var b = "b";
var g = "g";
var scr = "loading";
var bSpace = true;
var second = 1000;
var minute = 60*second;
var loadp = 0;
var asset = [];
var lastl = "";
var todo = 0;
var done = 0;
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
    ctx.fillRect(0,0,screen.width,screen.height);
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
var loading;
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
            
        break;
        default:
            fill("blue");
            printLineCenter("error :(",400,"w",100)

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
    setTimeout(()=>{
        //scr = "error"
    },second*20)
},second*5)
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