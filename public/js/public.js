function setScreenHeight(ele,h){
    ele.style.height = h + 'px';
}


//当前位置跟随
var navspans = document.getElementsByClassName("nav-span");
var spanWidth = navspans[0].offsetWidth;
var b = document.getElementsByClassName("light-line")[0];
var special = null;
//var count = 0;
//在每个页面中查找special
// if(navspans[i].firstChild.getAttribute("class") != null ){
//     var special = i;
// }
    for(var i = 0 ; i < navspans.length ; i++){
        //为每个元素添加属性
        navspans[i].index = i;
        //在每个页面中查找special
        if(navspans[i].firstChild.getAttribute("class") != null ){
            special = i;
        }
        navspans[i].onmouseover = function(){
            animate(b,this.index*spanWidth);
            for(var j = 0;j<navspans.length;j++){
                navspans[j].firstChild.setAttribute("class","");
            }
            navspans[this.index].firstChild.setAttribute("class","active");
        }
        navspans[i].onmouseout = function () {
            animate(b,special*spanWidth);
            for(var j = 0;j<navspans.length;j++){
                navspans[j].firstChild.setAttribute("class","");
            }
            navspans[special].firstChild.setAttribute("class","active"); 
            b.style.opacity = "0";
        }
    }





















//function currentNav(special){
    //special就是传进来的当前所在的位置
    // for(var i=0;i<navspans.length;i++){
    //     navspans[i].index = i;
    //     navspans[i].onmouseover = function () {
    //         animate(b,this.index*spanWidth);
    //         for(var j = 0;j<navspans.length;j++){
    //             navspans[j].firstChild.setAttribute("class","");
    //         }
    //         this.firstChild.setAttribute("class","active");
    //     }
    //     navspans[i].onmouseout = function () {
    //         animate(b,special*spanWidth);
    //         for(var j = 0;j<navspans.length;j++){
    //             navspans[j].firstChild.setAttribute("class","");
    //         }
    //         navspans[special].firstChild.setAttribute("class","active");
    //     }
    //     navspans[i].onclick = function () {
    //         special = this.index;
    //         animate(b,special*spanWidth);
    //         for(var j = 0;j<navspans.length;j++){
    //             navspans[j].firstChild.setAttribute("class"," ");
    //         }
    //         navspans[special].firstChild.setAttribute("class","active");
    //     }
    // }
//}

//设置鼠标hover移除nav的效果
var nav = document.getElementById("nav");
nav.onmouseover = function(){
    for(var j=0;j<navspans.length;j++){
        navspans[j].style.transform = "translateY(0) rotateY(0deg)";
    }
    b.style.opacity = 1;
}



//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },18);
}